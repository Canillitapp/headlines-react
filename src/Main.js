import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import News from './components/News';

import SplashScreen from './screens/splash';
import Highlights from './screens/highlights';

const RootTabs = TabNavigator(
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
      screen: News,
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
      screen: News,
      path: '/reactions',
      navigationOptions: {
        title: 'Reacciones',
        tabBarLabel: 'Reacciones',
        tabBarIcon: () => <Icon name="heart-o" color="#fff" size={20} />
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true
    }
  }
);

const Home = StackNavigator(
  {
    Root: {
      screen: RootTabs
    },
    Search: {
      screen: News,
      path: '/search/:q',
      navigationOptions: ({ navigation }) => {
        title: `Search ${navigation.state.params.q}!`;
      }
    }
  },
  {
    initialRouteName: 'Root'
  }
);

const CanillitApp = StackNavigator(
  {
    Loader: {
      screen: SplashScreen
    },
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Loader',
    headerMode: 'none'
  }
);

export default function Main() {
  return <CanillitApp />;
}
