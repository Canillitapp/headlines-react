import { NavigationActions } from 'react-navigation';

import AppNavigator from '../../../AppNavigator';

function navigateToHome({ state }) {
  const action = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })]
  });

  const actualState = state.get('navigation.nav');
  const nextState = AppNavigator.router.getStateForAction(action, actualState);

  state.set('navigation.nav', nextState);
}

export default navigateToHome;
