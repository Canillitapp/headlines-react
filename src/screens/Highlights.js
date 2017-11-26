import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import topicByUidCompute from '../compute/topicByUid';
import firstNewsByTopicCompute from '../compute/firstNewsByTopic';

import CardList from '../components/CardList';
import CardItem from '../components/CardItem';

export default connect(
  {
    trendingTopicsKeys: state`news.trendingTopics`
  },
  Highlights
);

function Highlights({ trendingTopicsKeys, refresh }) {
  return <CardList data={trendingTopicsKeys} renderItem={renderItem} />;
}

function renderItem({ item }) {
  return <HighlightItemHOC key={item} uid={item} />;
}

const HighlightItemHOC = connect(
  {
    topic: topicByUidCompute,
    news: firstNewsByTopicCompute,
    show: signal`navigation.navigateToTrendingNews`
  },
  HighlightItem
);

function HighlightItem({ uid, topic, news, show }) {
  const { topic: title, date } = topic;
  const {
    title: newsTitle,
    img_url: newsImgUrl,
    source_name: newsSource,
    date: newsDate
  } = news;

  const onPress = () => {
    show({ uid });
  };

  return (
    <CardItem
      uid={uid}
      topic={title}
      date={date}
      newsTitle={newsTitle}
      newsImgUrl={newsImgUrl}
      newsSource={newsSource}
      newsDate={newsDate}
      onPress={onPress}
    />
  );
}
