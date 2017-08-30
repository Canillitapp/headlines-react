import { compute } from 'cerebral';
import { state, props } from 'cerebral/tags';

export default compute(props`uid`, (uid, get) =>
  get(state`news.entities.topics.${uid}`)
);
