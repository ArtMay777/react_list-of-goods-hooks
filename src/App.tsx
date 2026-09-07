import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [sortType, setSortType] = useState(SortType.NONE);
  const [isReversed, setIsReversed] = useState(false);
  const visibleGoods = [...goodsFromServer];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort();
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((goodA, goodB) => goodA.length - goodB.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={
            sortType === SortType.ALPHABET
              ? 'button is-info'
              : 'button is-info is-light'
          }
          onClick={() => setSortType(SortType.ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            sortType === SortType.LENGTH
              ? 'button is-success'
              : 'button is-success is-light'
          }
          onClick={() => setSortType(SortType.LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={
            isReversed ? 'button is-warning' : 'button is-warning is-light'
          }
          onClick={() => setIsReversed(current => !current)}
        >
          Reverse
        </button>
        {(sortType !== SortType.NONE || isReversed) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSortType(SortType.NONE);
              setIsReversed(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
