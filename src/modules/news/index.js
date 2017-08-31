import moment from 'moment';

import signals from './signals';

export default {
  state: {
    entities: {
      topics: {},
      news: {}
    },

    nextTrendingDate: moment().format('YYYY-MM-DD'),
    trendingTopics: [],

    popularLoaded: false,
    popularLoading: false,
    popular: []
  },
  signals
};
