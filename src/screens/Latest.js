import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import LatestItem from './LatestItem';

import NewsList from '../components/NewsList';
import Loading from '../components/Loading';

export default connect(
  {
    news: state`news.latest.keys`,
    loading: state`news.latest.loading`,
    loaded: state`news.latest.loaded`
  },
  Latest
);

function Latest({ news, loading, loaded }) {
  if (loading && !loaded) {
    return <Loading />;
  }
  if (!loaded) {
    return null;
  }
  return <NewsList data={news} renderItem={renderItem} />;
}

function renderItem({ item }) {
  return <LatestItem key={item} uid={item} />;
}
