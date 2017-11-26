import navigate from './navigate';
import navigateToLoader from '../actions/navigateToLoader';
import navigateToHome from '../actions/navigateToHome';
import navigateToTrendingNews from '../actions/navigateToTrendingNews';

export default {
  navigate,
  navigateToLoader: [navigateToLoader],
  navigateToHome: [navigateToHome],
  navigateToTrendingNews: [navigateToTrendingNews]
};
