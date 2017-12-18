import moment from 'moment/min/moment-with-locales';

export default function getTrending({ state, http }) {
  const date = moment(state.get('news.trending.nextDate')).format('YYYY-MM-DD');
  const count = 5;
  return http.get(
    `/trending/${date}/${count}`,
    {},
    { onProgress: 'app.setProgress' }
  );
}
