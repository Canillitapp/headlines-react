export default function pushKeysFactory(category) {
  return function pushKeys({ state, props }) {
    props.allKeys.forEach(n => {
      state.push(`news.${category}.keys`, n);
    });
  };
}
