import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';

import ProgressBar from '../components/ProgressBar';
import { scale, scaleVertical } from '../utils/scale';

export default connect(
  {
    loadProgress: state`app.loadProgress`
  },
  SplashScreen
);

function SplashScreen({ loadProgress }) {
  let width = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={[styles.image, { width }]}
          source={require('../assets/canillita_2.jpeg')}
        />
        <View style={styles.text}>
          <Text style={styles.hero}>React Native</Text>
          <Text style={styles.appName}>Canillitapp</Text>
        </View>
      </View>
      <ProgressBar
        style={styles.progress}
        progress={loadProgress}
        width={scale(320)}
      />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1
  },
  image: {
    resizeMode: 'cover',
    height: scaleVertical(430)
  },
  text: {
    alignItems: 'center'
  },
  hero: {
    fontSize: 37
  },
  appName: {
    fontSize: 62
  },
  progress: {
    alignSelf: 'center',
    marginBottom: 35,
    backgroundColor: '#e5e5e5'
  }
});
