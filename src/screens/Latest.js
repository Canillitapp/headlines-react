import React from 'react';
import { connect } from '@cerebral/react';
import { state, props, signal } from 'cerebral/tags';

import NewsList from 'components/NewsList';
import Loading from 'components/Loading';
import NewsItem from 'components/NewsItem';

export default connect(
  {
    news: state`news.latest.keys`,
    loading: state`news.latest.loading`,
    loaded: state`news.latest.loaded`,
    refresh: signal`news.loadLatest`
  },
  Latest
);

function Latest({ news, loading, loaded, refresh }) {
  const onRefresh = () => {
    refresh({ force: true });
  };

  return (
    <Loading loading={loading && !loaded}>
      <NewsList data={news} renderItem={renderItem} loading={loading} refresh={onRefresh} />
    </Loading>
  );
}

function renderItem({ item }) {
  return <LatestItemHOC key={item} uid={item} />;
}

const LatestItemHOC = connect(
  {
    news: state`news.entities.news.${props`uid`}`
  },
  LatestItem
);

function LatestItem({ uid, news }) {
  const { title, img_url: imgUrl, source_name: sourceName, date, url } = news;
  return (
    <NewsItem
      uid={uid}
      title={title}
      date={date}
      imgUrl={imgUrl}
      url={url}
      sourceName={sourceName}
    />
  );
}
