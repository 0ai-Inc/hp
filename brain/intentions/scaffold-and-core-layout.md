---
id: scaffold-and-core-layout
title: プロジェクト初期化 + コアレイアウト + i18n + Three.js
parent: brain/objectives/company-website-launch.md
github_issue: 2
status: executing
created_at: 2026-04-02T01:38:00+09:00
completed_at: null
---

## Intent

Astro プロジェクトの初期化、コアレイアウト（Header/Footer/BaseLayout）、i18n システム、Three.js パーティクルネットワーク背景を構築する。全ページの基盤となる Phase 0-2 を一括実行。

## Why

全ページがこの基盤に依存するため、最初に確立する必要がある。AC1（ビルド成功）、AC2（Three.js）、AC3（i18n）、AC7（カラーテーマ）の基盤。

## Approach

1. astro.config.mjs 作成（site, i18n, Tailwind vite plugin, sitemap）
2. Tailwind CSS グローバルスタイル（#061124 + 白テーマ）
3. i18n 翻訳辞書 + ヘルパー関数
4. BaseLayout + Header（右上言語切替）+ Footer
5. Three.js パーティクルネットワーク実装
6. ホームページ（JP/EN）でビルド確認

## Outcome

(pending)
