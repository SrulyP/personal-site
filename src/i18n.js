import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en/global.json';
import heTranslations from './translations/he/global.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations,
        },
        he: {
            translation: heTranslations,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

// Set direction based on language
i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('dir', lng === 'he' ? 'rtl' : 'ltr');
});

// Set initial direction
document.documentElement.setAttribute(
    'dir',
    i18n.language === 'he' ? 'rtl' : 'ltr'
);

export default i18n;
