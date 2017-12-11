import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

export default function CardList({ data, renderItem, loading, refresh }) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={k => k}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refresh} />
      }
    />
  );
}
