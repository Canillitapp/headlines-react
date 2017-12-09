import React from 'react';
import { connect } from '@cerebral/react';
import { state, props } from 'cerebral/tags';

import Loading from 'components/Loading';
import NewsList from 'components/NewsList';
import NewsItem from 'components/NewsItem';

export default connect(
  {
    news: state`news.popular.keys`,
    loading: state`news.popular.loading`,
    loaded: state`news.popular.loaded`
  },
  Popular
);

function Popular({ news, loading, loaded }) {
  return (
    <Loading loading={loading && !loaded}>
      <NewsList data={news} renderItem={renderItem} />
    </Loading>
  );
}

function renderItem({ item }) {
  return <PopularItemHOC key={item} uid={item} />;
}

const PopularItemHOC = connect(
  {
    news: state`news.entities.news.${props`uid`}`
  },
  PopularItem
);

function PopularItem({ uid, news }) {
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
