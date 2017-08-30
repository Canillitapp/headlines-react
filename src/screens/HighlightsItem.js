import React from 'react';
import { connect } from 'cerebral/react';

import topicByUidCompute from '../compute/topicByUid';
import firstNewsByTopicCompute from '../compute/firstNewsByTopic';

import CardItem from '../components/CardItem';

export default connect(
  {
    topic: topicByUidCompute,
    news: firstNewsByTopicCompute
  },
  HighlightItem
);

function HighlightItem({ uid, topic, news }) {
  const { topic: title, date } = topic;
  const {
    title: newsTitle,
    img_url: newsImgUrl,
    source_name: newsSource,
    date: newsDate
  } = news;
  return (
    <CardItem
      uid={uid}
      topic={title}
      date={date}
      newsTitle={newsTitle}
      newsImgUrl={newsImgUrl}
      newsSource={newsSource}
      newsDate={newsDate}
    />
  );
}
