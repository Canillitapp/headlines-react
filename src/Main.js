import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  StyleProvider,
  Container,
  Content,
  Right,
  Title,
  Tab,
  Tabs,
  TabHeading,
  Text
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import AppHeader from './components/AppHeader';
import Highlights from './components/Highlights';

export default function Main() {
  const tabTitle = (title, icon) =>
    <TabHeading>
      <Icon name={icon} color="#fff" size={20} />
      <Text style={styles.tabText}>
        {title}
      </Text>
    </TabHeading>;

  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Tabs initialPage={0}>
          <Tab heading={tabTitle('Destacados', 'newspaper-o')}>
            <Highlights />
          </Tab>
          <Tab heading={tabTitle('Popular', 'line-chart')}>
            <Content>
              <View style={styles.container}>
                <Text style={styles.welcome}>Tab2!</Text>
                <Text style={styles.instructions}>
                  To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                  Double tap R on your keyboard to reload,{'\n'}
                  Shake or press menu button for dev menu
                </Text>
              </View>
            </Content>
          </Tab>
          <Tab heading={tabTitle('Reciente', 'history')}>
            <Content>
              <View style={styles.container}>
                <Text style={styles.welcome}>Tab3!</Text>
                <Text style={styles.instructions}>
                  To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                  Double tap R on your keyboard to reload,{'\n'}
                  Shake or press menu button for dev menu
                </Text>
              </View>
            </Content>
          </Tab>
          <Tab heading={tabTitle('Reacciones', 'heart-o')}>
            <Content>
              <View style={styles.container}>
                <Text style={styles.welcome}>Tab3!</Text>
                <Text style={styles.instructions}>
                  To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                  Double tap R on your keyboard to reload,{'\n'}
                  Shake or press menu button for dev menu
                </Text>
              </View>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    </StyleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  tabText: {
    fontSize: 12
  }
});
