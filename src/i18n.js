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
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
