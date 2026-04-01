import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  BufferAttribute,
  Points,
  PointsMaterial,
  LineSegments,
  LineBasicMaterial,
  AdditiveBlending,
  DynamicDrawUsage,
  Vector2,
} from 'three';

interface ParticleData {
  vx: number;
  vy: number;
  vz: number;
  connections: number;
}

export function initParticleNetwork(container: HTMLElement) {
  const isMobile = window.innerWidth < 640;
  const PARTICLE_COUNT = isMobile ? 50 : 100;
  const MAX_CONNECTIONS = 4;
  const MIN_DISTANCE = isMobile ? 200 : 150;
  const BOUNDS = 400;
  const HALF = BOUNDS / 2;
  const SPEED = 0.15;

  const scene = new Scene();
  const camera = new PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 2000);
  camera.position.z = 500;

  const renderer = new WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Particles
  const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
  const particlesData: ParticleData[] = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particlePositions[i * 3] = Math.random() * BOUNDS - HALF;
    particlePositions[i * 3 + 1] = Math.random() * BOUNDS - HALF;
    particlePositions[i * 3 + 2] = Math.random() * BOUNDS - HALF;
    particlesData.push({
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      vz: (Math.random() - 0.5) * SPEED,
      connections: 0,
    });
  }

  const particleGeometry = new BufferGeometry();
  particleGeometry.setAttribute(
    'position',
    new BufferAttribute(particlePositions, 3).setUsage(DynamicDrawUsage)
  );
  particleGeometry.setDrawRange(0, PARTICLE_COUNT);

  const particleMaterial = new PointsMaterial({
    color: 0xffffff,
    size: isMobile ? 2 : 2.5,
    blending: AdditiveBlending,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: false,
  });

  const pointCloud = new Points(particleGeometry, particleMaterial);
  scene.add(pointCloud);

  // Lines
  const maxSegments = PARTICLE_COUNT * PARTICLE_COUNT;
  const linePositions = new Float32Array(maxSegments * 3);
  const lineColors = new Float32Array(maxSegments * 3);

  const lineGeometry = new BufferGeometry();
  lineGeometry.setAttribute(
    'position',
    new BufferAttribute(linePositions, 3).setUsage(DynamicDrawUsage)
  );
  lineGeometry.setAttribute(
    'color',
    new BufferAttribute(lineColors, 3).setUsage(DynamicDrawUsage)
  );
  lineGeometry.setDrawRange(0, 0);

  const lineMaterial = new LineBasicMaterial({
    vertexColors: true,
    blending: AdditiveBlending,
    transparent: true,
    opacity: 0.6,
  });

  const linesMesh = new LineSegments(lineGeometry, lineMaterial);
  scene.add(linesMesh);

  // Mouse tracking
  const mouse = new Vector2(9999, 9999);
  const MOUSE_INFLUENCE = 30;

  function onMouseMove(e: MouseEvent) {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function onMouseLeave() {
    mouse.set(9999, 9999);
  }

  if (!isMobile) {
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);
  }

  // Resize
  function onResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  window.addEventListener('resize', onResize);

  // Animation
  let animationId: number;
  let paused = false;

  function onVisibilityChange() {
    paused = document.hidden;
  }
  document.addEventListener('visibilitychange', onVisibilityChange);

  function animate() {
    animationId = requestAnimationFrame(animate);
    if (paused) return;

    // Update particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const d = particlesData[i];
      d.connections = 0;

      particlePositions[i * 3] += d.vx;
      particlePositions[i * 3 + 1] += d.vy;
      particlePositions[i * 3 + 2] += d.vz;

      // Bounce off bounds
      if (particlePositions[i * 3] < -HALF || particlePositions[i * 3] > HALF) d.vx = -d.vx;
      if (particlePositions[i * 3 + 1] < -HALF || particlePositions[i * 3 + 1] > HALF) d.vy = -d.vy;
      if (particlePositions[i * 3 + 2] < -HALF || particlePositions[i * 3 + 2] > HALF) d.vz = -d.vz;

      // Mouse influence
      if (mouse.x !== 9999) {
        const mx = mouse.x * HALF;
        const my = mouse.y * HALF;
        const px = particlePositions[i * 3];
        const py = particlePositions[i * 3 + 1];
        const dx = mx - px;
        const dy = my - py;
        const distSq = dx * dx + dy * dy;
        if (distSq < MOUSE_INFLUENCE * MOUSE_INFLUENCE * 100) {
          const force = 0.02;
          d.vx += dx * force * 0.01;
          d.vy += dy * force * 0.01;
          // Clamp velocity
          const speed = Math.sqrt(d.vx * d.vx + d.vy * d.vy + d.vz * d.vz);
          if (speed > SPEED * 3) {
            const scale = (SPEED * 3) / speed;
            d.vx *= scale;
            d.vy *= scale;
            d.vz *= scale;
          }
        }
      }
    }

    // Update connections
    let vertexPos = 0;
    let colorPos = 0;
    let numConnected = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (particlesData[i].connections >= MAX_CONNECTIONS) continue;

      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        if (particlesData[j].connections >= MAX_CONNECTIONS) continue;

        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < MIN_DISTANCE) {
          particlesData[i].connections++;
          particlesData[j].connections++;

          const alpha = 1.0 - dist / MIN_DISTANCE;

          linePositions[vertexPos++] = particlePositions[i * 3];
          linePositions[vertexPos++] = particlePositions[i * 3 + 1];
          linePositions[vertexPos++] = particlePositions[i * 3 + 2];
          linePositions[vertexPos++] = particlePositions[j * 3];
          linePositions[vertexPos++] = particlePositions[j * 3 + 1];
          linePositions[vertexPos++] = particlePositions[j * 3 + 2];

          lineColors[colorPos++] = alpha;
          lineColors[colorPos++] = alpha;
          lineColors[colorPos++] = alpha;
          lineColors[colorPos++] = alpha;
          lineColors[colorPos++] = alpha;
          lineColors[colorPos++] = alpha;

          numConnected++;
        }
      }
    }

    lineGeometry.setDrawRange(0, numConnected * 2);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;
    particleGeometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();

  // Cleanup
  return function dispose() {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    if (!isMobile) {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    }
    particleGeometry.dispose();
    particleMaterial.dispose();
    lineGeometry.dispose();
    lineMaterial.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
