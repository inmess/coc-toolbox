import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { locale } from '@tauri-apps/api/os';
import { LanguageDetectorAsyncModule } from 'i18next';

import en from '@/constants/translations/en';
import zh from '@/constants/translations/zh';

const LANGUAGES = {
  en,
  zh
};

// const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR: LanguageDetectorAsyncModule = {
    type: 'languageDetector',
    async: true,
    detect: async (callback: any) => {
        const language = localStorage.getItem('user-language');

        if (language) return callback(language);

        const sys_locale = await locale();
        if (sys_locale) return callback(sys_locale);

        console.log('No language is set, choosing English as fallback');
        return callback('en');

    },
    init: () => {},
    cacheUserLanguage: language => {
        localStorage.setItem('user-language', language);
    }
};

i18n
    // detect language
    .use(LANGUAGE_DETECTOR)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // set options
    .init({
        compatibilityJSON: 'v4',
        resources: LANGUAGES,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        },
        defaultNS: 'common'
    }
);