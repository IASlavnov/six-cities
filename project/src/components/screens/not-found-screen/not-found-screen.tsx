import { Link } from 'react-router-dom';

import Header from '../../header/header';

import { AppRoute } from '../../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page" style={{ height: '100vh' }}>
      <Header />

      <main className="page__main">
        <div className="property__wrapper">
          <h1>404. Page not found</h1>
          <Link to={AppRoute.Root}>
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
