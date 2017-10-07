import addDays from 'date-fns/addDays';

export default function setNextTrendingDate({ state }) {
  const date = state.get('news.nextTrendingDate');
  const newDate = addDays(date, -1);
  state.set('news.nextTrendingDate', newDate);
}
