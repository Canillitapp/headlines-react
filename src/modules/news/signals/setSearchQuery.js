import { state, props } from 'cerebral/tags';
import { setField } from '@cerebral/forms/operators';

export default [setField(state`news.searchForm.query`, props`value`)];
