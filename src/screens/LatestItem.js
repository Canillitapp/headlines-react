import React from 'react';
import { connect } from '@cerebral/react';
import { state, props } from 'cerebral/tags';

import NewsItem from '../components/NewsItem';

export default connect(
  {
    news: state`news.entities.news.${props`uid`}`
  },
  LatestItem
);

function LatestItem({ uid, news }) {
  const { title, img_url: imgUrl, source_name: sourceName, date } = news;
  return (
    <NewsItem
      uid={uid}
      title={title}
      date={date}
      imgUrl={imgUrl}
      sourceName={sourceName}
    />
  );
}
