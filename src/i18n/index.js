import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import en from './locales/en';
import es from './locales/es';
import pt from './locales/pt';


i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = { en, es, pt };

export default i18n;
