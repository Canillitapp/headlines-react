import format from 'date-fns/format';

export default function getNewsFactory(category) {
  return function getNews({ state, http }) {
    let path = `/${category}`;
    if (category === 'latest') {
      const date = format(new Date(), 'YYYY-MM-DD');
      path = `${path}/${date}`;
    }
    return http.get(path, {}, { onProgress: 'app.setProgress' });
  };
}
