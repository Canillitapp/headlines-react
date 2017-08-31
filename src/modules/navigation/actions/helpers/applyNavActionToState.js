import AppNavigator from '../../../../AppNavigator';

export default function applyNavActionToState(state, action) {
  const actualState = state.get('navigation.nav');
  const nextState = AppNavigator.router.getStateForAction(action, actualState);

  state.set('navigation.nav', nextState);
}
