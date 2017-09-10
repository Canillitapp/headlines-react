import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import PopularItem from './PopularItem';

import NewsList from '../components/NewsList';
import Loading from '../components/Loading';

export default connect(
  {
    news: state`news.popular`,
    loading: state`news.popularLoading`,
    loaded: state`news.popularLoaded`
  },
  Popular
);

function Popular({ news, loading, loaded }) {
  if (loading && !loaded) {
    return <Loading />;
  }
  if (!loaded) {
    return null;
  }
  return <NewsList data={news} renderItem={renderItem} />;
}

function renderItem({ item }) {
  return <PopularItem key={item} uid={item} />;
}
