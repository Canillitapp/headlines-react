import moment from 'moment/min/moment-with-locales';

import signals from './signals';

export default {
  state: {
    entities: {
      topics: {},
      news: {}
    },

    trending: {
      loaded: false,
      loading: false,
      loadingMore: false,
      nextDate: moment().valueOf(),
      topics: []
    },
    popular: {
      loaded: false,
      loading: false,
      keys: []
    },
    latest: {
      loaded: false,
      loading: false,
      keys: []
    },
    search: {
      loaded: false,
      loading: false,
      keys: [],
      last: ''
    },

    searchForm: {
      query: {
        value: '',
        defaultValue: '',
        isRequired: true
      }
    }
  },
  signals
};
