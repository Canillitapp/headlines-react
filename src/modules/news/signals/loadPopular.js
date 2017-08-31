import { when, set } from 'cerebral/operators';
import { state } from 'cerebral/tags';
import getPopular from '../actions/getPopular';
import parseNews from '../actions/parseNews';
import pushPopular from '../actions/pushPopular';
import mergeNews from '../actions/mergeNews';

export default [
  when(state`news.popularLoading`),
  {
    true: [],
    false: [
      set(state`news.popularLoading`, true),
      when(state`news.popularLoaded`),
      {
        true: [],
        false: [
          getPopular,
          parseNews,
          mergeNews,
          pushPopular,
          set(state`news.popularLoaded`, true)
        ]
      }
    ]
  },
  set(state`news.popularLoading`, true)
];
