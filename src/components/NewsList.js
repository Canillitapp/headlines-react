import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

export default function NewsList({ data, renderItem, loading, refresh }) {
  let refreshControl = null;
  if (refresh) {
    refreshControl = (
      <RefreshControl refreshing={loading} onRefresh={refresh} />
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={k => k}
      refreshControl={refreshControl}
    />
  );
}
