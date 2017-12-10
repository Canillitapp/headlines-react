import { NavigationActions } from 'react-navigation';

import applyNavActionToState from './helpers/applyNavActionToState';

function goBack({ state, props }) {
  const action = NavigationActions.back();

  applyNavActionToState(state, action);
}

export default goBack;
