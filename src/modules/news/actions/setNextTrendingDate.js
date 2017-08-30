import moment from 'moment';

export default function setNextTrendingDate({ state }) {
  const date = state.get('news.nextTrendingDate');
  const newDate = moment(date, 'YYYY-MM-DD').add(-1, 'days');
  state.set('news.nextTrendingDate', newDate.format('YYYY-MM-DD'));
}
