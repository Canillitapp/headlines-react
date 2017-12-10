import { set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import showStatusBar from './actions/showStatusBar';
import loadTrending from '../news/signals/loadTrending';

export default {
  state: {
    loadProgress: 0
  },
  signals: {
    load: [
      showStatusBar(false),
      ...loadTrending,
      showStatusBar(true)
    ],
    setProgress: [set(state`app.loadProgress`, props`progress`)]
  }
};
