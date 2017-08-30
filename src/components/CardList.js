import React from 'react';
import { FlatList } from 'react-native';
import { RkStyleSheet } from 'react-native-ui-kitten';
export default function CardList({ data, renderItem }) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={k => k}
      style={styles.container}
    />
  );
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  }
}));
