import { Compute } from 'cerebral';
import { state, props } from 'cerebral/tags';

export default Compute(props`uid`, (uid, get) =>
  get(state`news.entities.topics.${uid}`)
);
