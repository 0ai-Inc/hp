import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string): string {
    return lang === defaultLang ? path : `/${lang}${path}`;
  };
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'ja' ? 'en' : 'ja';
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  let pathname = url.pathname;

  if (currentLang !== defaultLang) {
    pathname = pathname.replace(`/${currentLang}`, '') || '/';
  }

  if (targetLang === defaultLang) {
    return pathname;
  }

  return `/${targetLang}${pathname}`;
}
