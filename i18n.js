import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (cb) => {
    const lang = await AsyncStorage.getItem('userLanguage');
    cb(lang || 'en');
  },
  init: () => {},
  cacheUserLanguage: (lang) => {
    AsyncStorage.setItem('userLanguage', lang);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          ask_me: 'Ask Me',
          display_schemes: 'Display All Schemes',
          // Add other keys here
        },
      },
      hi: {
        translation: {
          welcome: 'स्वागत है',
          ask_me: 'मुझसे पूछें',
          display_schemes: 'सभी योजनाएं दिखाएं',
          // Translate others similarly
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
