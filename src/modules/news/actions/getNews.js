import moment from 'moment/min/moment-with-locales';

export default function getNewsFactory(category) {
  return function getNews({ state, http, forms }) {
    let path = `/${category}`;

    if (category === 'latest') {
      const date = moment().format('YYYY-MM-DD');
      path = `${path}/${date}`;
    } else if (category === 'search') {
      const { query } = forms.toJSON('news.searchForm');
      path = `${path}/${query}`;
    }

    return http.get(path, {}, { onProgress: 'app.setProgress' });
  };
}
