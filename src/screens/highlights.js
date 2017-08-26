import React, { Component } from 'react';
import { FlatList, Image, View, TouchableOpacity } from 'react-native';
import { RkText, RkCard, RkStyleSheet } from 'react-native-ui-kitten';
import moment from 'moment';
import data from '../mocks/trending';

export default class Highlights extends Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.data = data.keywords.map(keyword => {
      const highlight = data.news[keyword];
      const firstNews = highlight[0];
      return {
        keyword,
        firstNews
      };
    });
    this.renderItem = this._renderItem.bind(this);
  }

  _keyExtractor(post) {
    return post.keyword;
  }

  _renderItem(info) {
    const { keyword, firstNews } = info.item;
    const { img_url, title, source_name } = firstNews;
    const date = moment(firstNews.date, 'X');
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('Article', { id: info.item.keyword })}
      >
        <RkCard rkType="imgBlock" style={styles.card}>
          <Image rkCardImg source={{ uri: img_url }} />

          <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType="header4 inverseColor">
              {keyword}
            </RkText>
            <RkText style={styles.time} rkType="secondary2 inverseColor">
              {date.fromNow()}
            </RkText>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType="primary3 mediumLine" numberOfLines={2}>
                {title}
              </RkText>
            </View>
          </View>
          <View rkCardFooter>
            <View style={styles.userInfo}>
              <RkText rkType="header6">
                {source_name}
              </RkText>
            </View>
            <RkText rkType="secondary2 hintColor">
              {date.format('LT')}
            </RkText>
          </View>
        </RkCard>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        data={this.data}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        style={styles.container}
      />
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8
  },
  time: {
    marginTop: 5
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  }
}));
