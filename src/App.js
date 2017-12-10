import React, { Component } from 'react';
import { BackHandler } from "react-native";
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './AppNavigator';

export default connect(
  {
    navState: state`navigation.nav`,
    navSignal: signal`navigation.navigate`,
    goBack: signal`navigation.goBack`
  },
  class App extends Component {
    constructor(...args) {
      super(...args);
    }
    componentDidMount() {
      BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
      const { goBack/* , navState*/ } = this.props;
      // if (navState.index === 0) {
      //   return false;
      // }
      goBack();
      return true;
    };
    render() {
      const { navState, navSignal } = this.props;

      const dispatch = action => {
        navSignal({ action });
      };

      const navHelper = addNavigationHelpers({
        dispatch,
        state: navState
      });
      return <AppNavigator navigation={navHelper} />;
    }
  }
);
