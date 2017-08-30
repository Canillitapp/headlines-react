import { Controller } from 'cerebral';

import modules from '../modules';

const controller = Controller({
  state: {
    title: 'Hello world'
  },
  modules
});

export const load = controller.getSignal('app.load');

export default controller;
