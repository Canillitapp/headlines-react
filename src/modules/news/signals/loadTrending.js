import { merge, when, set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import startOfDay from 'date-fns/startOfDay';
import format from 'date-fns/format';

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
        props`more`,
        (loaded, force, more) => !loaded || force || more
      ),
      {
        true: [
          set(state`news.trending.loading`, true),
          when(props`force`),
          {
            true: [
              set(
                state`news.trending.nextDate`,
                Number(format(startOfDay(new Date()), 'x'))
              )
            ],
            false: []
          },
          when(props`more`),
          {
            true: [set(state`news.trending.loadingMore`, true)],
            false: []
          },
          getTrending,
          parseTrending,
          setNextTrendingDate,
          merge(state`news.entities.topics`, props`topics`),
          merge(state`news.entities.news`, props`news`),
          when(props`force`),
          {
            true: [set(state`news.trending.topics`, [])],
            false: []
          },
          pushTrending,
          set(state`news.trending.loaded`, true),
          set(state`news.trending.loading`, false),
          set(state`news.trending.loadingMore`, false)
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
