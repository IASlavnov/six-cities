import PlaceCard from '../place-card/place-card';

import { PlaceType } from '../../const';
import { Offers } from '../../types/offer';

type FavoritesPlacesProps = {
  offers: Offers,
};

function FavoritesPlaces({ offers }: FavoritesPlacesProps): JSX.Element {
  return (
    <div className="favorites__places">
      {
        offers.map((offer) => (
          <PlaceCard key={offer.id} offer={offer} placeType={PlaceType.Favorites} />
        ))
      }
    </div>
  );
}

export default FavoritesPlaces;
