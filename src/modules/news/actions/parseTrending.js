import moment from 'moment/min/moment-with-locales';

export default function parseTrending({ props, state }) {
  const date = moment(state.get('news.trending.nextDate')).format('YYYY-MM-DD');
  const { result } = props;
  const output = {
    topics: {},
    news: {},
    allTopics: result.keywords.map(k => `${k}-${date}`)
  };
  for (let key in result.news) {
    if (result.news.hasOwnProperty(key)) {
      const news = result.news[key];
      const newsKeys = [];
      news.forEach(n => {
        newsKeys.push(n.news_id);
        output.news[n.news_id] = n;
      });
      output.topics[`${key}-${date}`] = {
        topic: key,
        date,
        news: newsKeys
      };
    }
  }

  return output;
}
