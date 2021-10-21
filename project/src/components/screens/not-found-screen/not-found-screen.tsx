import { Link } from 'react-router-dom';

import Logo from '../../logo/logo';

import { AppRoute } from '../../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page" style={{ height: '100vh' }}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
