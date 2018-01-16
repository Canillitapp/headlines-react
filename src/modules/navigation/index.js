import { Module } from 'cerebral';
import { NavigationActions } from 'react-navigation';

import AppNavigator from '../../AppNavigator';

import signals from './signals';

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

export default Module({
  state: {
    nav: initialState
  },
  signals
});
