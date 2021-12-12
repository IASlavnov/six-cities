import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Header from '../../header/header';
import Tabs from '../../tabs/tabs';
import Sort from '../../sort/sort';
import PlacesList from '../../places-list/places-list';
import Map from '../../map/map';

import { sortOffers } from '../../../utils/utils';

import { State } from '../../../types/state';

const mapStateToProps = (state: State) => ({
  offers: state.offers.filter((offer) => offer.city.name === state.city.name),
  city: state.city,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen({ offers, city }: PropsFromRedux): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [sort, setSort] = useState('Popular');

  const onCardItemHover = (cardId: number | null) => {
    setSelectedCard(cardId);
  };

  const onSortClick = (sortType: string) => {
    setSort(sortType);
  };

  const sortedOffers = sortOffers(offers, sort);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city.name}</b>
              <Sort sort={sort} onSortClick={onSortClick} />
              <PlacesList
                offers={sortedOffers}
                onCardItemHover={onCardItemHover}
                className='cities__places-list tabs__content'
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                offers={sortedOffers}
                selectedCard={selectedCard}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { MainScreen };
export default connector(MainScreen);
