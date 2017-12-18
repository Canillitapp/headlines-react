import { StatusBar } from 'react-native';
import moment from 'moment/min/moment-with-locales';
import { getLanguages } from 'react-native-i18n';

export let bootstrap = () => {
  StatusBar.setBarStyle('dark-content', true);
  getLanguages().then(languages => {
    const locales = moment.locales();
    const lang = languages[0].split('-');

    if (locales.includes(languages[0])) {
      moment.locale(languages[0]);
    } else if (locales.includes(lang[0])) {
      moment.locale(lang[0]);
    }

  });
};
