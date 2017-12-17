import loadTrending from './loadTrending';
import loadNews from './loadNews';
import search from './search';
import setSearchQuery from './setSearchQuery';

export default {
  loadTrending,
  loadPopular: loadNews('popular'),
  loadLatest: loadNews('latest'),
  search,
  setSearchQuery
};
