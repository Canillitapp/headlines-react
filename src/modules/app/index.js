import { set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import loadTrending from '../news/signals/loadTrending';

export default {
  state: {
    loadProgress: 0
  },
  signals: {
    load: [
      ...loadTrending
    ],
    setProgress: [set(state`app.loadProgress`, props`progress`)]
  }
};
