import { Controller } from 'cerebral';
import HttpProvider from '@cerebral/http';
import FormsProvider from '@cerebral/forms';

import { API_URL } from 'config/env';

import modules from '../modules';

// const Devtools = ['production', 'test'].includes(process.env.NODE_ENV)
//   ? null
//   : require('cerebral/devtools').default;

const Devtools = null;

const controller = Controller({
  devtools:
    Devtools &&
    Devtools({
      host: '192.168.1.107:8585'
    }),
  state: {
    title: 'Hello world'
  },
  modules,
  providers: [
    HttpProvider({
      baseUrl: API_URL,
      withCredentials: false
    }),
    FormsProvider()
  ]
});

export const load = controller.getSignal('app.load');

export default controller;
