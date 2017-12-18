import React from 'react';
import { Linking } from 'react-native';
import moment from 'moment';

import {
  NewsContainer,
  NewsImage,
  NewsDescription,
  NewsText,
  CardDescSource,
  CardDescDate
} from './styled';

const onPress = url => {
  Linking.openURL(url);
};

export default function NewsItem({
  uid,
  imgUrl,
  title,
  sourceName,
  date,
  url
}) {
  const parsedNewsDate = moment.unix(date);

  return (
    <NewsContainer
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => onPress(url)}
    >
      <NewsImage
        source={{ uri: imgUrl }}
        defaultSource={require('../assets/image_placeholder_big.png')}
      />
      <NewsDescription>
        <NewsText>{title}</NewsText>
        <CardDescDate>{parsedNewsDate.format('LT')}</CardDescDate>
        <CardDescSource>{sourceName}</CardDescSource>
      </NewsDescription>
    </NewsContainer>
  );
}
