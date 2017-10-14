import addDays from 'date-fns/addDays';
import format from 'date-fns/format';

export default function setNextTrendingDate({ state }) {
  const date = state.get('news.nextTrendingDate');
  const newDate = Number(format(addDays(date, -1), 'x'));
  state.set('news.nextTrendingDate', newDate);
}
