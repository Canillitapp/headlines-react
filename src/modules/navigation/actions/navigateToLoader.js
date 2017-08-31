import { NavigationActions } from 'react-navigation';

import applyNavActionToState from './helpers/applyNavActionToState';

function navigateToLoader({ state }) {
  const action = NavigationActions.navigate({
    routeName: 'Loading'
  });

  applyNavActionToState(state, action);
}

export default navigateToLoader;
