import { set, wait } from 'cerebral/operators';
import { state } from 'cerebral/tags';
import showStatusBar from './actions/showStatusBar';
import navigateToHome from '../navigation/actions/navigateToHome';

export default {
  state: {
    loadProgress: 0
  },
  signals: {
    load: [
      showStatusBar(false),
      wait(500),
      set(state`app.loadProgress`, 0.25),
      wait(500),
      set(state`app.loadProgress`, 0.5),
      wait(500),
      set(state`app.loadProgress`, 0.75),
      wait(500),
      set(state`app.loadProgress`, 1),
      showStatusBar(true),
      navigateToHome
    ]
  }
};
