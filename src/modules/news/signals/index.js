import loadNews from './loadNews';
import loadTrending from './loadTrending';

export default {
  loadTrending,
  loadPopular: loadNews('popular'),
  loadLatest: loadNews('latest')
};
