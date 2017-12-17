import format from 'date-fns/format';

export default function parseTrending({ props, state }) {
  const date = format(state.get('news.trending.nextDate'), 'YYYY-MM-DD');
  const { result } = props;
  const output = {
    topics: {},
    news: {},
    allTopics: result.keywords.map(k => `${k}-${date}`)
  };
  for (let key in result.news) {
    if (!result.news.hasOwnProperty(key)) {
      return;
    }
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

  return output;
}
