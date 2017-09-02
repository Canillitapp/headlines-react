export default function getPopular({ state, http }) {
  return http.get(`/popular`, {}, { onProgress: 'app.setProgress' });
}
