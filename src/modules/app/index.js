import { Module } from 'cerebral';
import { set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import loadTrending from '../news/signals/loadTrending';

export default Module({
  state: {
    loadProgress: 0,
    httpError: false
  },
  signals: {
    load: [...loadTrending],
    setProgress: [set(state`app.loadProgress`, props`progress`)]
  }
});
