import PlaceCard from '../place-card/place-card';

import { PlaceType } from '../../const';
import { Offers } from '../../types/offer';

type PlacesListProps = {
  offers: Offers,
  onCardItemHover: (id: number | null) => void,
  className?: string,
};

function PlacesList({ offers, onCardItemHover, className = 'near-places__list' }: PlacesListProps): JSX.Element {
  const cardItemHoverHandler = (cardId: number | null) => {
    onCardItemHover(cardId);
  };

  const placeType = className === 'near-places__list' ? PlaceType.NearPlaces : PlaceType.Main;

  return (
    <div className={`places__list ${className}`}>
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseOver={() => cardItemHoverHandler(offer.id)}
            onMouseOut={() => cardItemHoverHandler(null)}
            placeType={placeType}
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
