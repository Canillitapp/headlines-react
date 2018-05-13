import { Module } from 'cerebral';
import HttpProvider, { HttpProviderError } from '@cerebral/http';
import FormsProvider from '@cerebral/forms';

import { API_URL } from 'config/env';

import app from './app';
import news from './news';

import {httpErrorThrown} from './app/signals';

export default Module({
  // Define module state, namespaced by module path
  state: {},
  // Define module signals, namespaced by module path
  signals: {},
  // Define submodules, namespaced by module path
  modules: {
    app,
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
  catch: [[HttpProviderError, httpErrorThrown]]
});
