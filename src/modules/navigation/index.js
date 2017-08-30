import AppNavigator from '../../AppNavigator';

import navigate from './actions/navigate';
import navigateToLoader from './actions/navigateToLoader';
import navigateToHome from './actions/navigateToHome';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Loader')
);

export default {
  state: {
    nav: initialState
  },
  signals: {
    navigate: [navigate],
    navigateToLoader: [navigateToLoader],
    navigateToHome: [navigateToHome]
  }
};
