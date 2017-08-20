import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemeProvider } from 'react-native-material-ui';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Highlights from './components/Highlights';

const AppNav = TabNavigator(
  {
    TrendingTab: {
      screen: Highlights,
      path: '/',
      navigationOptions: {
        title: 'Trending',
        tabBarLabel: 'Destacados',
        tabBarIcon: () => <Icon name="newspaper-o" color="#fff" size={20} />
      }
    },
    PopularTab: {
      screen: Highlights,
      path: '/popular',
      navigationOptions: {
        title: 'Popular',
        tabBarLabel: 'Popular',
        tabBarIcon: () => <Icon name="line-chart" color="#fff" size={20} />
      }
    },
    LatestTab: {
      screen: Highlights,
      path: '/latest',
      navigationOptions: {
        title: 'Reciente',
        tabBarLabel: 'Reciente',
        tabBarIcon: () => <Icon name="history" color="#fff" size={20} />
      }
    },
    ReactionsTab: {
      screen: Highlights,
      path: '/reactions',
      navigationOptions: {
        title: 'Reacciones',
        tabBarLabel: 'Reacciones',
        tabBarIcon: () => <Icon name="heart-o" color="#fff" size={20} />
      }
    }
  },
  {}
);

export default function Main() {
  return (
    <ThemeProvider>
      <AppNav />
    </ThemeProvider>
  );
}
