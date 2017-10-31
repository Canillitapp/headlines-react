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

    popular: {
      loaded: false,
      loading: false,
      keys: []
    },
    latest: {
      loaded: false,
      loading: false,
      keys: []
    }
  },
  signals
};
