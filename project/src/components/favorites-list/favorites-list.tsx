import { Link } from 'react-router-dom';

import FavoritesPlaces from '../favorites-places/favorites-places';

import { Offers } from '../../types/offer';

type FavoritesListProps = {
  offers: Offers,
};

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  const cities = [...new Set(offers.map(({city}) => city.name))];

  return (
    <ul className="favorites__list">
      {
        cities.map((city) => (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <FavoritesPlaces offers={offers.filter((offer) => offer.city.name === city)} />
          </li>
        ))
      }
    </ul>
  );
}

export default FavoritesList;
