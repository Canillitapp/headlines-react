import React from 'react';
import { connect } from '@cerebral/react';
import { state, props } from 'cerebral/tags';

import NewsItem from '../components/NewsItem';

export default connect(
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
