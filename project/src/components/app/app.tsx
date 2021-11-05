import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { FavoritesScreen, LoginScreen, MainScreen, NotFoundScreen, RoomScreen } from '../screens';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offer';
import { Cities } from '../../types/city';
import { Reviews } from '../../types/review';

type AppProps = {
  offers: Offers,
  cities: Cities,
  reviews: Reviews,
};

function App({ offers, cities, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen offers={offers} cities={cities} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRoute.Login}>
          <LoginScreen />
        </Route>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <RoomScreen offers={offers} reviews={reviews} cities={cities} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
