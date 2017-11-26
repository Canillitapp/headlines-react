import { equals } from 'cerebral/operators';
import { props } from 'cerebral/tags';

import navigate from '../actions/navigate';
import newsSignals from '../../news/signals';

export default [
  navigate,
  equals(props`action.routeName`),
  {
    TrendingTab: [...newsSignals.loadTrending],
    PopularTab: [...newsSignals.loadPopular],
    LatestTab: [...newsSignals.loadLatest],
    otherwise: []
  }
];
