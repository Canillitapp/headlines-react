import React from 'react';
import { View, Text } from 'react-native';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import formatRelative from 'date-fns/formatRelative';

import {
  CardContainer,
  CardImage,
  CardImageText,
  CardNewsCount,
  CardDescription,
  CardDescSource,
  CardDescDate
} from './styled';

export default function CardItem({
  onPress,
  uid,
  topic,
  date,
  newsTitle,
  newsImgUrl,
  newsSource,
  newsDate
}) {
  const parsedTopicDate = parse(date, 'YYYY-MM-DD', new Date());
  return (
    <CardContainer
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => onPress(uid)}
    >
      <CardImage source={{ uri: newsImgUrl }}>
        <CardNewsCount>9 noticias</CardNewsCount>
        <View>
          <CardImageText topic={true}>{topic}</CardImageText>
          <CardImageText>
            {formatRelative(parsedTopicDate, new Date())}
          </CardImageText>
        </View>
      </CardImage>
      <CardDescription>
        <Text numberOfLines={2}>{newsTitle}</Text>
        <Text>
          <CardDescSource>{newsSource} </CardDescSource>
          <CardDescDate> {format(newsDate, 'LT')}</CardDescDate>
        </Text>
      </CardDescription>
    </CardContainer>
  );
}
// instead of formatRelative we had
/*
parsedTopicDate.calendar(null, {
              sameDay: '[Today]',
              nextDay: '[Tomorrow]',
              nextWeek: 'dddd',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'L'
            })
*/
