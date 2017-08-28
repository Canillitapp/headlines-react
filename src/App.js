import React from 'react';
import { connect } from 'cerebral/react';
import { state, signal } from 'cerebral/tags';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './AppNavigator';

export default connect(
  {
    navState: state`navigation.nav`,
    navSignal: signal`navigation.navigate`
  },
  function App({ navState, navSignal }) {
    const dispatch = action => {
      navSignal({ action });
    };

    const navHelper = addNavigationHelpers({
      dispatch,
      state: navState
    });
    return <AppNavigator navigation={navHelper} />;
  }
);
