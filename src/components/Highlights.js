import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
  Container,
  Content,
  Right,
  Title,
  Tab,
  Tabs,
  TabHeading,
  Text
} from 'native-base';

import mockData from '../mocks/trending';

export default function Highlights() {
  const highlightsGrid = mockData.keywords.map(keyword => {
    const highlight = mockData.news[keyword];
    const fisrtNews = highlight[0];
    return (
      <View style={styles.item} key={keyword}>
        <Image
          resizeMode="cover"
          style={styles.itemImage}
          source={{ uri: fisrtNews.img_url }}
        >
          <Text style={styles.itemText}>
            {keyword}
          </Text>
        </Image>
      </View>
    );
  });
  return (
    <Content>
      <View style={styles.container}>
        {highlightsGrid}
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    padding: 3,
    height: 300,
    width: '50%'
  },
  itemImage: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  itemText: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    color: 'rgb(255,255,255)',
    fontSize: 22,
    padding: 4
  }
});
