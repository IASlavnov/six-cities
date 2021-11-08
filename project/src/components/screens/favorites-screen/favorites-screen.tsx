import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import Header from '../../header/header';
import FavoritesList from '../../favorites-list/favorites-list';

import { setOffers } from '../../../store/action';
import { offers as mockOffers } from '../../../mocks/offers';

import { Actions } from '../../../types/action';
import { State } from '../../../types/state';

const mapStateToProps = ({ offers }: State) => ({
  offers: offers.filter((offer) => offer.isFavorite),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  fetchData() {
    dispatch(setOffers(mockOffers));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesScreen({ offers, fetchData }: PropsFromRedux): JSX.Element {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export { FavoritesScreen };
export default connector(FavoritesScreen);
