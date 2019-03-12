import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as Backend from 'i18next-xhr-backend';
import * as LanguageDetector from 'i18next-browser-languagedetector';

// use require() to get each json in the locales directory
const context = (require as any).context('./locales/', true, /\.json$/);
const locales: string[] = [];

context.keys().forEach((key: string) => {
    // key is of format `en/translations.json`
    
    // Extract the locale from this path:
    const split = key.split('/');
    const lng = split[split.length - 2];
    locales.push(lng);
});

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next);

i18n.on('languageChanged', lang => {
    // update the html lang attribute:
    document.documentElement.lang = lang;
});

function loadLocales(url: string, options: any, callback: any, data: any) {
    try {
        const split = url.split('/');
        const locale = require(`./locales/${split[0]}/${split[1]}.json`);        
        callback(locale, { status: '200' });
    } catch (e) {
        console.log(e);
        callback(null, { status: '404' });
    }
}

i18n.init({
    fallbackLng: 'es',
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    whitelist: locales,
    ns: ['translations'],
    defaultNS: 'translations',
    backend: {
        loadPath: '{{lng}}/{{ns}}',
        parse: (data: any) => data,
        ajax: loadLocales
    }
});

export default i18n;
