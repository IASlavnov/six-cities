import { useState } from 'react';

import PlaceCard from '../place-card/place-card';

import { PlaceType } from '../../const';
import { Offers } from '../../types/offer';

type PlacesListProps = {
  offers: Offers,
};

function PlacesList({ offers }: PlacesListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onMouseOver={() => setActiveCard(offer.id)}
            onMouseOut={() => setActiveCard(null)}
            placeType={PlaceType.Main}
          />
        ))
      }
      {/* Временно для линтера */}
      <p>Активная карточка: {activeCard}</p>
    </div>
  );
}

export default PlacesList;
