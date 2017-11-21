import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import formatRelative from 'date-fns/formatRelative';

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
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => onPress(uid)}
    >
      <Image source={{ uri: newsImgUrl }} />
      <View>
        <Text>{topic}</Text>
        <Text>{formatRelative(parsedTopicDate, new Date())}</Text>
      </View>
      <View>
        <View>
          <Text numberOfLines={2}>{newsTitle}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>{newsSource}</Text>
        </View>
        <Text>{format(newsDate, 'LT')}</Text>
      </View>
    </TouchableOpacity>
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
