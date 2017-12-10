import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import News from 'components/News';
import Highlights from './screens/Highlights';
import HighlightsNews from './screens/HighlightsNews';
import Popular from './screens/Popular';
import Latest from './screens/Latest';

import * as theme from 'utils/theme';

const iconTrending = ({ tintColor }) => <Icon name="newspaper-o" color={tintColor} size={20} />;
const iconPopular = ({ tintColor }) => <Icon name="line-chart" color={tintColor} size={20} />;
const iconLatest = ({ tintColor }) => <Icon name="history" color={tintColor} size={20} />;
// const iconReactions = () => <Icon name="heart-o" color="#fff" size={20} />;

const RootTabs = TabNavigator(
  {
    TrendingTab: {
      screen: Highlights,
      path: '/',
      navigationOptions: {
        title: 'Destacados',
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
      screen: Latest,
      path: '/latest',
      navigationOptions: {
        title: 'Recientes',
        tabBarLabel: 'Recientes',
        tabBarIcon: iconLatest
      }
    }
    // ReactionsTab: {
    //   screen: News,
    //   path: '/reactions',
    //   navigationOptions: {
    //     title: 'Reacciones',
    //     tabBarLabel: 'Reacciones',
    //     tabBarIcon: iconReactions
    //   }
    // }
  },
  {
    initialRouteName: 'TrendingTab',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: theme.waterMelon,
      inactiveTintColor: theme.warmGrey,
      style: {
        backgroundColor: theme.tabsBackground,
      },
      indicatorStyle: {
        backgroundColor: theme.waterMelon
      },
      upperCaseLabel: false
    },
    tabBarPosition: 'bottom'
  }
);

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: RootTabs
    },
    TrendingNews: {
      screen: HighlightsNews,
      path: '/trending/:uid',
      navigationOptions: ({ navigation }) => {
        return {
          title: navigation.state.params.title
        };
      }
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
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.headerBackground
      },
      headerTintColor: theme.white
    }
  }
);

export default AppNavigator;
