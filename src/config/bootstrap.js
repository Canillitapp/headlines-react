import { StatusBar } from 'react-native';
import moment from 'moment/min/moment-with-locales';
import { getLanguages } from 'react-native-i18n';

export let bootstrap = () => {
  StatusBar.setBarStyle('dark-content', true);
  getLanguages().then(languages => {
    moment.locale(languages[0]);
  });
};
