import React from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';

import { waterMelon } from 'utils/theme';
import { CardLoadMoreIndicatorContainer } from './styled';

export default function CardList({
  data,
  renderItem,
  loading,
  loadingMore,
  onRefresh,
  onLoadMore
}) {
  const renderFooter = () => {
    if (!loadingMore) return null;

    return (
      <CardLoadMoreIndicatorContainer>
        <ActivityIndicator size={50} color={waterMelon} />
      </CardLoadMoreIndicatorContainer>
    );
  };

  let refreshControl = null;
  if (onRefresh) {
    refreshControl = (
      <RefreshControl
        refreshing={loading && !loadingMore}
        onRefresh={onRefresh}
        colors={[waterMelon]}
      />
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
      ListFooterComponent={renderFooter}
    />
  );
}
