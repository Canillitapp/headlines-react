import { NavigationActions } from 'react-navigation';

import AppNavigator from '../../../AppNavigator';

function navigateToLoader({ state }) {
  const action = NavigationActions.navigate({
    routeName: 'Loading'
  });

  const actualState = state.get('navigation.nav');
  const nextState = AppNavigator.router.getStateForAction(action, actualState);

  state.set('navigation.nav', nextState);
}

export default navigateToLoader;
