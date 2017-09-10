import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import HighlightsItem from './HighlightsItem';

import CardList from '../components/CardList';

export default connect(
  {
    trendingTopicsKeys: state`news.trendingTopics`
  },
  Highlights
);

function Highlights({ trendingTopicsKeys }) {
  return <CardList data={trendingTopicsKeys} renderItem={renderItem} />;
}

function renderItem({ item }) {
  return <HighlightsItem key={item} uid={item} />;
}
