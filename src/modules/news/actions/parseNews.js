export default function parseNews({ props }) {
  const { result } = props;
  const output = {
    news: {},
    allKeys: []
  };

  result.forEach(n => {
    output.allKeys.push(n.news_id);
    output.news[n.news_id] = n;
  });

  return output;
}
