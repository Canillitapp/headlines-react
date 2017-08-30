export default function getTrending({ state, http }) {
  const date = state.get('news.nextTrendingDate');
  const count = 5;
  return http.get(
    `/trending/${date}/${count}`,
    {},
    { onProgress: 'app.setProgress' }
  );
}
