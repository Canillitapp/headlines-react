import { Controller } from 'cerebral';

import appModule from '../modules';

const Devtools = ['production', 'test'].includes(process.env.NODE_ENV)
  ? null
  : require('cerebral/devtools').default;

// const Devtools = null;

const controller = Controller(appModule, {
  devtools:
    Devtools &&
    Devtools({
      host: '192.168.1.107:8585'
    }),
  throwToConsole: true
});

export const load = controller.getSignal('app.load');

export default controller;
