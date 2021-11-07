import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { FavoritesScreen, LoginScreen, MainScreen, NotFoundScreen, RoomScreen } from '../screens';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';

import { Reviews } from '../../types/review';

type AppProps = {
  reviews: Reviews,
};

function App({ reviews }: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRoute.Login}>
          <LoginScreen />
        </Route>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <RoomScreen reviews={reviews} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
