import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import arTranslation from '../public/locales/ar/translation.json';
import enTranslation from '../public/locales/en/translation.json';

i18n
  .use(LanguageDetector) // ✅ enables detection
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    lng: localStorage.getItem("i18nextLng") || "ar", // ✅ Arabic as default
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // ✅ saves selected lang
    },
    debug: true,
    resources: {
      ar: { translation: arTranslation },
      en: { translation: enTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
