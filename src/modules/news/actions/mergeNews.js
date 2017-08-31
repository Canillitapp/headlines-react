export default function mergeNews({ state, props }) {
  state.merge('news.entities.news', props.news);
}
