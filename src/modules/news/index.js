import startOfDay from 'date-fns/startOfDay';

import signals from './signals';

export default {
  state: {
    entities: {
      topics: {},
      news: {}
    },

    nextTrendingDate: startOfDay(new Date()),
    trendingTopics: [],

    popularLoaded: false,
    popularLoading: false,
    popular: []
  },
  signals
};
