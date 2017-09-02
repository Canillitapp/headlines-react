import { NavigationActions } from 'react-navigation';

import applyNavActionToState from './helpers/applyNavActionToState';

function navigateToHome({ state }) {
  const action = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })]
  });

  applyNavActionToState(state, action);
}

export default navigateToHome;
