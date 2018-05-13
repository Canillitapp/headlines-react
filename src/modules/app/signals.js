import { set } from 'cerebral/operators';
import { state } from 'cerebral/tags';

export const httpErrorThrown = [set(state`app.httpError`, true)];
