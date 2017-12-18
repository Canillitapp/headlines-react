import moment from 'moment';

export default function setNextTrendingDate({ state }) {
  const date = state.get('news.trending.nextDate');
  const newDate = moment(date).add(-1, 'days').valueOf();
  state.set('news.trending.nextDate', newDate);
}
