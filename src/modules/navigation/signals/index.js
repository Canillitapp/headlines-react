import navigate from './navigate';
import navigateToLoader from '../actions/navigateToLoader';
import navigateToHome from '../actions/navigateToHome';

export default {
  navigate,
  navigateToLoader: [navigateToLoader],
  navigateToHome: [navigateToHome]
};
