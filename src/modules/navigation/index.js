import AppNavigator from '../../AppNavigator';

import signals from './signals';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Loader')
);

export default {
  state: {
    nav: initialState
  },
  signals
};
