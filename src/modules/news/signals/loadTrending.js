import { merge } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import getTrending from '../actions/getTrending';
import parseTrending from '../actions/parseTrending';
import setNextTrendingDate from '../actions/setNextTrendingDate';
import pushTrending from '../actions/pushTrending';

export default [
  getTrending,
  parseTrending,
  setNextTrendingDate,
  merge(state`news.entities.topics`, props`topics`),
  merge(state`news.entities.news`, props`news`),
  pushTrending
];
