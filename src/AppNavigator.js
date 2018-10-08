import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Search from './screens/Search';
import Highlights from './screens/Highlights';
import HighlightsNews from './screens/HighlightsNews';
import Popular from './screens/Popular';
import Latest from './screens/Latest';

import { SearchButton } from './components/styled';
import * as theme from './utils/theme';
import i18n from './i18n';

const iconTrending = ({ tintColor }) => (
  <Icon name="newspaper-o" color={tintColor} size={20} />
);
const iconPopular = ({ tintColor }) => (
  <Icon name="line-chart" color={tintColor} size={20} />
);
const iconLatest = ({ tintColor }) => (
  <Icon name="history" color={tintColor} size={20} />
);
// const iconReactions = () => <Icon name="heart-o" color="#fff" size={20} />;
const iconSearch = <Icon name="search" color={theme.white} size={24} />;

const HomeTabs = createBottomTabNavigator(
  {
    TrendingTab: {
      screen: Highlights,
      path: '/',
      navigationOptions: {
        headerTitle: i18n.t('trendingTitle'),
        tabBarLabel: i18n.t('trendingTitle'),
        tabBarIcon: iconTrending
      }
    },
    PopularTab: {
      screen: Popular,
      path: '/popular',
      navigationOptions: {
        headerTitle: i18n.t('popularTitle'),
        tabBarLabel: i18n.t('popularTitle'),
        tabBarIcon: iconPopular
      }
    },
    LatestTab: {
      screen: Latest,
      path: '/latest',
      navigationOptions: {
        headerTitle: i18n.t('latestTitle'),
        tabBarLabel: i18n.t('latestTitle'),
        tabBarIcon: iconLatest
      }
    }
    // ReactionsTab: {
    //   screen: News,
    //   path: '/reactions',
    //   navigationOptions: {
    //     headerTitle: i18n.t('reactionsTitle'),
    //     tabBarLabel: i18n.t('reactionsTitle'),
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
        backgroundColor: theme.tabsBackground
      },
      indicatorStyle: {
        backgroundColor: theme.waterMelon
      },
      upperCaseLabel: false
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeTabs,
      navigationOptions: ({navigation}) => {
        const { routeName } = navigation.state.routes[navigation.state.index];

        let headerTitle = '';
        switch (routeName) {
          case 'TrendingTab':
            headerTitle = i18n.t('trendingTitle');
            break;
          case 'PopularTab':
            headerTitle = i18n.t('popularTitle');
            break;
          case 'LatestTab':
            headerTitle = i18n.t('latestTitle');
            break;
        }

        return {
          headerTitle,
        };
      }
    },
    TrendingNews: {
      screen: HighlightsNews,
      path: '/trending/:uid',
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: navigation.state.params.title
        };
      }
    },
    Search: {
      screen: Search,
      path: '/search'
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: ({ navigation, ...args }) => {
      return {
        headerStyle: {
          backgroundColor: theme.headerBackground
        },
        headerTintColor: theme.white,
        headerRight: (
          <SearchButton
            onPress={() => {
              navigation.navigate('Search');
            }}
          >
            {iconSearch}
          </SearchButton>
        )
      };
    }
  }
);

export default AppNavigator;
