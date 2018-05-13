import React, { Component } from 'react';
import { BackHandler } from "react-native";

import AppNavigator from './AppNavigator';

export default class App extends Component {
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
    // const { goBack/* , navState*/ } = this.props;
    // if (navState.index === 0) {
    //   return false;
    // }
    // goBack();
    return true;
  };
  render() {
    return <AppNavigator />;
  }
}

