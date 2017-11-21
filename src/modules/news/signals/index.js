import loadTrending from './loadTrending';
import loadNews from './loadNews';
import search from './search';

export default {
  loadTrending,
  loadPopular: loadNews('popular'),
  loadLatest: loadNews('latest'),
  search
};
