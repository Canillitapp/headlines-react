import { when, set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import getNews from '../actions/getNews';
import parseNews from '../actions/parseNews';
import pushKeys from '../actions/pushKeys';
import mergeNews from '../actions/mergeNews';

export default function loadNewsFactory(category) {
  return [
    set(state`app.httpError`, false),
    when(state`news.${category}.loading`),
    {
      true: [],
      false: [
        when(
          state`news.${category}.loaded`,
          props`force`,
          (loaded, force) => !loaded || force
        ),
        {
          true: [
            set(state`news.${category}.loading`, true),
            getNews(category),
            parseNews,
            mergeNews,
            when(props`force`),
            {
              true: [set(state`news.${category}.keys`, [])],
              false: []
            },
            pushKeys(category),
            set(state`news.${category}.loaded`, true),
            set(state`news.${category}.loading`, false)
          ],
          false: []
        }
      ]
    }
  ];
}
