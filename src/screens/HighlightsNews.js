import React from 'react';
import { connect } from '@cerebral/react';
import { state, props } from 'cerebral/tags';

import NewsList from 'components/NewsList';
import NewsItem from 'components/NewsItem';

export default connect(
  {
    news: state`news.entities.topics.${props`navigation.state.params.uid`}.news`
  },
  HighlightsNews
);

function HighlightsNews(props) {
  const { news } = props;
  return <NewsList data={news} renderItem={renderItem} />;
}

function renderItem({ item }) {
  return <HighlightsNewsItemHOC key={item} uid={item} />;
}

const HighlightsNewsItemHOC = connect(
  {
    news: state`news.entities.news.${props`uid`}`
  },
  HighlightsNewsItem
);

function HighlightsNewsItem({ uid, news }) {
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
