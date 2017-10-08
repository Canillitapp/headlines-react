import format from 'date-fns/format';

export default function getTrending({ state, http }) {
  const date = format(state.get('news.nextTrendingDate'), 'YYYY-MM-DD');
  const count = 5;
  return http.get(
    `/trending/${date}/${count}`,
    {},
    { onProgress: 'app.setProgress' }
  );
}
