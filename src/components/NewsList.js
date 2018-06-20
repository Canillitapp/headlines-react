import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

import { waterMelon } from 'utils/theme';
import { NewsSeparator } from './styled';

const renderSeparator = () => {
  return <NewsSeparator />;
};

export default function NewsList({ data, renderItem, loading, refresh }) {
  let refreshControl = null;
  if (refresh) {
    refreshControl = (
      <RefreshControl
        refreshing={loading}
        onRefresh={refresh}
        colors={[waterMelon]}
      />
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={k => k.toString()}
      refreshControl={refreshControl}
      ItemSeparatorComponent={renderSeparator}
    />
  );
}
