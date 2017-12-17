import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import topicByUidCompute from 'compute/topicByUid';
import firstNewsByTopicCompute from 'compute/firstNewsByTopic';

import Loading from 'components/Loading';
import CardList from 'components/CardList';
import CardItem from 'components/CardItem';

export default connect(
  {
    trendingTopicsKeys: state`news.trending.topics`,
    loading: state`news.trending.loading`,
    loadingMore: state`news.trending.loadingMore`,
    loaded: state`news.trending.loaded`,
    refresh: signal`news.loadTrending`
  },
  Highlights
);

function Highlights({ trendingTopicsKeys, loading, loadingMore, loaded, refresh }) {
  const onRefresh = () => {
    refresh({ force: true });
  };
  const onLoadMore = () => {
    refresh({ more: true });
  };

  return (
    <Loading loading={loading && !loaded} ß>
      <CardList
        data={trendingTopicsKeys}
        renderItem={renderItem}
        loading={loading}
        loadingMore={loadingMore}
        onRefresh={onRefresh}
        onLoadMore={onLoadMore}
      />
    </Loading>
  );
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
    show({ uid, title });
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
