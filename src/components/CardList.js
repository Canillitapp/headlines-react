import React from 'react';
import { FlatList } from 'react-native';

export default function CardList({ data, renderItem }) {
  return <FlatList data={data} renderItem={renderItem} keyExtractor={k => k} />;
}
