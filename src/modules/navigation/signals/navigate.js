import { equals } from 'cerebral/operators';
import { props } from 'cerebral/tags';

import navigate from '../actions/navigate';
import loadPopular from '../../news/signals/loadPopular';
import loadTrending from '../../news/signals/loadTrending';

export default [
  navigate,
  equals(props`action.routeName`),
  {
    TrendingTab: [...loadTrending],
    PopularTab: [...loadPopular]
  }
];
