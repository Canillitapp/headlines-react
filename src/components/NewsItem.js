import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { RkCard, RkText, RkStyleSheet } from 'react-native-ui-kitten';
import moment from 'moment';

export default function NewsItem({
  onPress,
  uid,
  imgUrl,
  title,
  sourceName,
  date
}) {
  const parsedNewsDate = moment(date, 'X');
  return (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => onPress(uid)}
    >
      <RkCard rkType="horizontal" style={styles.card}>
        <Image rkCardImg source={{ uri: imgUrl }} />

        <View rkCardContent>
          <RkText numberOfLines={1} rkType="header6">
            {sourceName}
          </RkText>
          <RkText rkType="secondary6 hintColor">
            {parsedNewsDate.format('LT')}
          </RkText>
          <RkText style={styles.post} numberOfLines={2} rkType="secondary1">
            {title}
          </RkText>
        </View>
      </RkCard>
    </TouchableOpacity>
  );
}

let styles = RkStyleSheet.create(theme => ({
  card: {
    marginVertical: 8
  },
  post: {
    marginTop: 13
  }
}));
