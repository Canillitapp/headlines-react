import { state } from 'cerebral/tags';
import { when, set } from 'cerebral/operators';
import { isValidForm } from '@cerebral/forms/operators';

import loadNews from './loadNews';

export default [
  isValidForm(state`news.searchForm`),
  {
    true: [
      when(
        state`news.search.last`,
        state`news.searchForm.query.value`,
        (last, query) => last !== query
      ),
      {
        true: [
          set(state`news.search.loaded`, false),
          set(state`news.search.keys`, []),
          ...loadNews('search'),
          set(state`news.search.last`, state`news.searchForm.query.value`)
        ],
        false: []
      }
    ],
    false: []
  }
];
