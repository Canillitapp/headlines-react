import React, { Component } from 'react';
import { connect } from '@cerebral/react';
import { signal } from 'cerebral/tags';

import AppNavigator from './AppNavigator';

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

export default connect(
  {
    TrendingTab: signal`news.loadTrending`,
    PopularTab: signal`news.loadPopular`,
    LatestTab: signal`news.loadLatest`
  },
  class App extends Component {
    constructor(...args) {
      super(...args);
    }

    onNavigationStateChange = (prevState, currentState) => {
      const currentScreen = getActiveRouteName(currentState);
      const prevScreen = getActiveRouteName(prevState);

      if (prevScreen !== currentScreen) {
        if (this.props[currentScreen]) {
          this.props[currentScreen]();
        }
      }
    };

    render() {
      return (
        <AppNavigator onNavigationStateChange={this.onNavigationStateChange} />
      );
    }
  }
);
