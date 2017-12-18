import React from 'react';
import { View } from 'react-native';
import moment from 'moment/min/moment-with-locales';

import i18n from 'i18n';

import {
  CardContainer,
  CardImage,
  CardImageText,
  CardNewsCount,
  CardDescription,
  CardDescText,
  CardDescSource,
  CardDescDate
} from './styled';

export default function CardItem({
  onPress,
  uid,
  topic,
  date,
  count,
  newsTitle,
  newsImgUrl,
  newsSource,
  newsDate
}) {
  const parsedTopicDate = moment(date, 'YYYY-MM-DD');
  const stringDate = parsedTopicDate.calendar(null, {
    sameDay: `[${i18n.t('today')}]`,
    nextDay: `[${i18n.t('tomorrow')}]`,
    nextWeek: 'dddd',
    lastDay: `[${i18n.t('yesterday')}]`,
    lastWeek: 'dddd',
    sameElse: 'L'
  });

  return (
    <CardContainer
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => onPress(uid)}
    >
      <CardImage
        defaultSource={require('../assets/image_placeholder_big.png')}
        source={{ uri: newsImgUrl }}
      >
        <CardNewsCount>{count} {i18n.t('news')}</CardNewsCount>
        <View>
          <CardImageText>{stringDate}</CardImageText>
          <CardImageText topic={true}>{topic}</CardImageText>
        </View>
      </CardImage>
      <CardDescription>
        <CardDescText>{newsTitle}</CardDescText>
        <CardDescText>
          <CardDescSource>{newsSource} </CardDescSource>
          <CardDescDate> {moment.unix(newsDate).format('LT')}</CardDescDate>
        </CardDescText>
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
