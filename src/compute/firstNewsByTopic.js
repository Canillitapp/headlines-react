import { Compute } from 'cerebral';
import { state } from 'cerebral/tags';

import topicByUid from './topicByUid';

export default Compute(topicByUid, function firstNewsByTopic(topic, get) {
  if (!topic.news.length) {
    return;
  }
  const firstNewsKey = topic.news[0];
  return get(state`news.entities.news.${firstNewsKey}`);
});
