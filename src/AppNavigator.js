import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import News from './components/News';
import SplashScreen from './screens/Splash';
import Highlights from './screens/Highlights';
import Popular from './screens/Popular';

const iconTrending = () => <Icon name="newspaper-o" color="#fff" size={20} />;
const iconPopular = () => <Icon name="line-chart" color="#fff" size={20} />;
const iconLatest = () => <Icon name="history" color="#fff" size={20} />;
const iconReactions = () => <Icon name="heart-o" color="#fff" size={20} />;

const RootTabs = TabNavigator(
  {
    TrendingTab: {
      screen: Highlights,
      path: '/',
      navigationOptions: {
        title: 'Trending',
        tabBarLabel: 'Destacados',
        tabBarIcon: iconTrending
      }
    },
    PopularTab: {
      screen: Popular,
      path: '/popular',
      navigationOptions: {
        title: 'Popular',
        tabBarLabel: 'Popular',
        tabBarIcon: iconPopular
      }
    },
    LatestTab: {
      screen: Highlights,
      path: '/latest',
      navigationOptions: {
        title: 'Latest',
        tabBarLabel: 'Reciente',
        tabBarIcon: iconLatest
      }
    },
    ReactionsTab: {
      screen: News,
      path: '/reactions',
      navigationOptions: {
        title: 'Reacciones',
        tabBarLabel: 'Reacciones',
        tabBarIcon: iconReactions
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
        return {
          title: `Search ${navigation.state.params.q}!`
        };
      }
    }
  },
  {
    initialRouteName: 'Root'
  }
);

const AppNavigator = StackNavigator(
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

export default AppNavigator;
