import React from 'react';
import { TouchableOpacity, Image, View, Linking, Text } from 'react-native';
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
      <Image source={{ uri: imgUrl }} />
      <View>
        <Text numberOfLines={1}>{sourceName}</Text>
        <Text>{format(parsedNewsDate, 'LT')}</Text>
        <Text numberOfLines={2}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
