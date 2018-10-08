import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';
import { withNavigation } from 'react-navigation';

import topicByUidCompute from '../compute/topicByUid';
import firstNewsByTopicCompute from '../compute/firstNewsByTopic';

import Loading from '../components/Loading';
import Retry from '../components/Retry';
import CardList from '../components/CardList';
import CardItem from '../components/CardItem';

export default connect(
  {
    httpError: state`app.httpError`,
    trendingTopicsKeys: state`news.trending.topics`,
    loading: state`news.trending.loading`,
    loadingMore: state`news.trending.loadingMore`,
    loaded: state`news.trending.loaded`,
    refresh: signal`news.loadTrending`
  },
  Highlights
);

function Highlights({
  httpError,
  trendingTopicsKeys,
  loading,
  loadingMore,
  loaded,
  refresh
}) {
  const onRefresh = () => {
    refresh({ force: true });
  };
  const onLoadMore = () => {
    refresh({ more: true });
  };

  return (
    <Retry error={httpError} retryFn={onRefresh}>
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
    </Retry>
  );
}

function renderItem({ item }) {
  return <HighlightItemHOC key={item} uid={item} />;
}

const HighlightItemHOC = withNavigation(
  connect(
    {
      topic: topicByUidCompute,
      news: firstNewsByTopicCompute
    },
    HighlightItem
  )
);

function HighlightItem({ uid, topic, news, navigation }) {
  const { topic: title, date, news: newsKeys } = topic;
  const {
    title: newsTitle,
    img_url: newsImgUrl,
    source_name: newsSource,
    date: newsDate
  } = news;

  const onPress = () => {
    navigation.navigate('TrendingNews', { uid, title });
  };

  return (
    <CardItem
      uid={uid}
      topic={title}
      date={date}
      count={newsKeys.length}
      newsTitle={newsTitle}
      newsImgUrl={newsImgUrl}
      newsSource={newsSource}
      newsDate={newsDate}
      onPress={onPress}
    />
  );
}
