import React from 'react';
import { Linking, Text } from 'react-native';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

import {
  NewsContainer,
  NewsImage,
  NewsDescription,
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
      <NewsImage source={{ uri: imgUrl }} />
      <NewsDescription>
        <Text>{title}</Text>
        <CardDescDate>{format(parsedNewsDate, 'LT')}</CardDescDate>
        <CardDescSource>{sourceName}</CardDescSource>
      </NewsDescription>
    </NewsContainer>
  );
}
