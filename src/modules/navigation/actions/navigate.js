import AppNavigator from '../../../AppNavigator';

function navigate({ props, state }) {
  const actualState = state.get('navigation.nav');
  const nextState = AppNavigator.router.getStateForAction(
    props.action,
    actualState
  );
  if (nextState) {
    state.set('navigation.nav', nextState);
  }
}
export default navigate;
