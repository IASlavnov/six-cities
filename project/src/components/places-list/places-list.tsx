import PlaceCard from '../place-card/place-card';

import { PlaceType } from '../../const';
import { Offers } from '../../types/offer';

type PlacesListProps = {
  offers: Offers,
  onCardItemHover: (id: number | null) => void,
};

function PlacesList({ offers, onCardItemHover }: PlacesListProps): JSX.Element {
  const cardItemHoverHandler = (cardId: number | null) => {
    onCardItemHover(cardId);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseOver={() => cardItemHoverHandler(offer.id)}
            onMouseOut={() => cardItemHoverHandler(null)}
            placeType={PlaceType.Main}
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
