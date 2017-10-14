import { Controller } from 'cerebral';
import HttpProvider from '@cerebral/http';

import modules from '../modules';

const Devtools = ['production', 'test'].includes(process.env.NODE_ENV)
  ? null
  : require('cerebral/devtools').default;

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
      baseUrl: 'http://api.canillitapp.com',
      withCredentials: false
    })
  ]
});

export const load = controller.getSignal('app.load');

export default controller;
