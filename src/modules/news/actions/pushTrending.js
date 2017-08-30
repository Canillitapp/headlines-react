export default function setNextTrendingDate({ state, props }) {
  props.allTopics.forEach(topic => {
    state.push('news.trendingTopics', topic);
  });
}
