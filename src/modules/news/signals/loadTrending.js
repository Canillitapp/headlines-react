import { merge, when, set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import getTrending from '../actions/getTrending';
import parseTrending from '../actions/parseTrending';
import setNextTrendingDate from '../actions/setNextTrendingDate';
import pushTrending from '../actions/pushTrending';

export default [
    when(state`news.trending.loading`),
    {
      true: [],
      false: [
        when(
          state`news.trending.loaded`,
          props`force`,
          (loaded, force) => !loaded || force
        ),
        {
          true: [
            set(state`news.trending.loading`, true),
            getTrending,
            parseTrending,
            setNextTrendingDate,
            merge(state`news.entities.topics`, props`topics`),
            merge(state`news.entities.news`, props`news`),
            pushTrending,
            set(state`news.trending.loaded`, true),
            set(state`news.trending.loading`, false)
          ],
          false: []
        }
      ]
    }
  ];

// export default [
//  getTrending,
//  parseTrending,
//  setNextTrendingDate,
//  merge(state`news.entities.topics`, props`topics`),
//  merge(state`news.entities.news`, props`news`),
//  pushTrending
// ];
