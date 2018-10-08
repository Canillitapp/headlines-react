import React, { Component } from 'react';
import { connect } from '@cerebral/react';
import { state, props, signal } from 'cerebral/tags';
import { field } from '@cerebral/forms';
import Icon from 'react-native-vector-icons/FontAwesome';

import Loading from '../components/Loading';
import Retry from '../components/Retry';
import EmptyResult from '../components/EmptyResult';
import NewsList from '../components/NewsList';
import NewsItem from '../components/NewsItem';
import { SearchButton, SearchInput } from '../components/styled';
import * as theme from '../utils/theme';
import i18n from '../i18n';

export default class Search extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: i18n.t('search'),
      headerTitle: <SearchInputHOC />,
      headerRight: <SearchButtonHOC />
    };
  };
  render() {
    return <SearchListHOC />;
  }
}

const SearchInputHOC = connect(
  {
    searchInput: field(state`news.searchForm.query`),
    setSearchQuery: signal`news.setSearchQuery`,
    search: signal`news.search`
  },
  class extends Component {
    displayName = 'SearchInputHOCComponent';
    onChangeText = text => {
      const { setSearchQuery } = this.props;
      setSearchQuery({ value: text });
    };
    onSubmitEditing = text => {
      const { search } = this.props;
      search();
    };

    render() {
      const { searchInput } = this.props;

      return (
        <SearchInput
          autoFocus={true}
          value={searchInput.value}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
        />
      );
    }
  }
);

const SearchButtonHOC = connect(
  {
    search: signal`news.search`
  },
  function ({ search }) {
    const onSearch = () => {
      search();
    };
    return (
      <SearchButton onPress={onSearch}>
        <Icon name="search" color={theme.white} size={24} />
      </SearchButton>
    );
  }
);

const SearchListHOC = connect(
  {
    httpError: state`app.httpError`,
    news: state`news.search.keys`,
    loading: state`news.search.loading`,
    loaded: state`news.search.loaded`,
    search: signal`news.search`
  },
  SearchList
);

function SearchList({ httpError, news, loading, loaded, search }) {
  const onSearch = () => {
    search();
  };

  return (
    <Retry error={httpError} retryFn={onSearch}>
      <Loading loading={loading && !loaded}>
        <EmptyResult data={news}>
          <NewsList data={news} renderItem={renderItem} loading={loading} />
        </EmptyResult>
      </Loading>
    </Retry>
  );
}

function renderItem({ item }) {
  return <SearchItemHOC key={item} uid={item} />;
}

const SearchItemHOC = connect(
  {
    news: state`news.entities.news.${props`uid`}`
  },
  SearchItem
);

function SearchItem({ uid, news }) {
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
