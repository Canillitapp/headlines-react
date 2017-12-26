import { Module } from 'cerebral';
import HttpProvider from '@cerebral/http';
import FormsProvider from '@cerebral/forms';

import { API_URL } from 'config/env';

import app from './app';
import navigation from './navigation';
import news from './news';

export default Module({
  // Define module state, namespaced by module path
  state: {},
  // Define module signals, namespaced by module path
  signals: {},
  // Define submodules, namespaced by module path
  modules: {
    app,
    navigation,
    news
  },
  // Add a global providers when module instantiates
  providers: {
    http: HttpProvider({
      baseUrl: API_URL,
      withCredentials: false
    }),
    forms: FormsProvider()
  },
  // Add error catchers
  catch: []
});
