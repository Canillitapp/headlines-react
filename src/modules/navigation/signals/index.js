import navigate from './navigate';
import navigateToTrendingNews from '../actions/navigateToTrendingNews';
import goBack from '../actions/goBack';

export default {
  navigate,
  navigateToTrendingNews: [navigateToTrendingNews],
  goBack: [goBack]
};
