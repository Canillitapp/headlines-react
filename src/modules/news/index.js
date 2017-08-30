import moment from 'moment';

export default {
  state: {
    nextTrendingDate: moment().format('YYYY-MM-DD'),
    entities: {
      topics: {},
      news: {}
    },
    trendingTopics: []
  }
};
