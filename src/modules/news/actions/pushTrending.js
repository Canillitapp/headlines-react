export default function pushTrending({ state, props }) {
  props.allTopics.forEach(topic => {
    state.push('news.trendingTopics', topic);
  });
}
