import React from 'react';
import { TouchableOpacity, Image, View, Linking } from 'react-native';
import { RkCard, RkText, RkStyleSheet } from 'react-native-ui-kitten';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

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
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => onPress(url)}
    >
      <RkCard rkType="horizontal" style={styles.card}>
        <Image rkCardImg source={{ uri: imgUrl }} />

        <View rkCardContent>
          <RkText numberOfLines={1} rkType="header6">
            {sourceName}
          </RkText>
          <RkText rkType="secondary6 hintColor">
            {format(parsedNewsDate, 'LT')}
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
