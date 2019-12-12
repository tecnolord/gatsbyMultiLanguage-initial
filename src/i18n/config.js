import i18next from 'i18next';

i18next.init({
    fallbackLng: 'ca',
    resources: {
        ca: {
            translations: require('../locales/ca/translations.json')
        },
        es: {
            translations: require('../locales/es/translations.json')
        },
        en: {
            translations: require('../locales/en/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
});

i18next.languages = ['ca', 'es', 'en'];

export default i18next;