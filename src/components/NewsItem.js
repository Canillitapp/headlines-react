import React from 'react';
import { Linking } from 'react-native';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

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
  const parsedNewsDate = parse(date, 'X', new Date());

  return (
    <NewsContainer
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => onPress(url)}
    >
      <NewsImage source={{ uri: imgUrl }} defaultSource={require('../assets/image_placeholder_big.png')} />
      <NewsDescription>
        <NewsText>{title}</NewsText>
        <CardDescDate>{format(parsedNewsDate, 'LT')}</CardDescDate>
        <CardDescSource>{sourceName}</CardDescSource>
      </NewsDescription>
    </NewsContainer>
  );
}
