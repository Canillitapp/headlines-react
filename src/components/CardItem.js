import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { RkCard, RkText, RkStyleSheet } from 'react-native-ui-kitten';
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
  const parsedTopicDate = parse(date, 'YYYY-MM-DD');
  const parsedNewsDate = parse(newsDate, 'X');
  return (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => onPress(uid)}
    >
      <RkCard rkType="imgBlock" style={styles.card}>
        <Image rkCardImg source={{ uri: newsImgUrl }} />
        <View rkCardImgOverlay rkCardContent style={styles.overlay}>
          <RkText rkType="header4 inverseColor">{topic}</RkText>
          <RkText style={styles.time} rkType="secondary2 inverseColor">
            {formatRelative(parsedTopicDate, new Date())}
          </RkText>
        </View>
        <View rkCardContent>
          <View>
            <RkText rkType="primary3 mediumLine" numberOfLines={2}>
              {newsTitle}
            </RkText>
          </View>
        </View>
        <View rkCardFooter>
          <View style={styles.userInfo}>
            <RkText rkType="header6">{newsSource}</RkText>
          </View>
          <RkText rkType="secondary2 hintColor">
            {format(parsedNewsDate, 'LT')}
          </RkText>
        </View>
      </RkCard>
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
let styles = RkStyleSheet.create(theme => ({
  card: {
    marginVertical: 8
  },
  time: {
    marginTop: 5
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  }
}));
