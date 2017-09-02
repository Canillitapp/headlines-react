export default function pushPopular({ state, props }) {
  props.allKeys.forEach(n => {
    state.push('news.popular', n);
  });
}
