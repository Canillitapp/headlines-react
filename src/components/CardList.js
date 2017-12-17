import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

export default function CardList({ data, renderItem, loading, onRefresh, onLoadMore }) {
  let refreshControl = null;
  if (onRefresh) {
    refreshControl = (
      <RefreshControl refreshing={loading} onRefresh={onRefresh} />
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={k => k}
      refreshing={loading}
      refreshControl={refreshControl}
      onEndReached={onLoadMore}
      onEndReachedThreshold={1}
    />
  );
}
