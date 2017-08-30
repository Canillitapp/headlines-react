import { Controller } from 'cerebral';
import Devtools from 'cerebral/devtools';
import HttpProvider from '@cerebral/http';

import modules from '../modules';

const controller = Controller({
  devtools: Devtools({
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
