import format from 'date-fns/format';

export default function getNewsFactory(category) {
  return function getNews({ state, http, forms }) {
    let path = `/${category}`;

    if (category === 'latest') {
      const date = format(new Date(), 'YYYY-MM-DD');
      path = `${path}/${date}`;
    } else if (category === 'search') {
      const { query } = forms.toJSON('news.searchForm');
      path = `${path}/${query}`;
    }

    return http.get(path, {}, { onProgress: 'app.setProgress' });
  };
}
