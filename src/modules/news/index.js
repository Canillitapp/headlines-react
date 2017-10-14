import startOfDay from 'date-fns/startOfDay';
import format from 'date-fns/format';

import signals from './signals';

export default {
  state: {
    entities: {
      topics: {},
      news: {}
    },

    nextTrendingDate: Number(format(startOfDay(new Date()), 'x')),
    trendingTopics: [],

    popularLoaded: false,
    popularLoading: false,
    popular: []
  },
  signals
};
