import React, { useState } from 'react';

import { SORT_TYPES } from '../../const';

type SortProps = {
  sort: string,
  onSortClick: (sortType: string) => void,
};

function Sort({ sort, onSortClick }: SortProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form
      onClick={handleSortClick}
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {
          SORT_TYPES.map((type) => (
            <li
              key={type}
              className={`places__option ${type === sort ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => onSortClick(type)}
            >
              {type}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sort;
