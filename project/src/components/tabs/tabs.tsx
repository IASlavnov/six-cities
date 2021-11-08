import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { changeCity } from '../../store/action';
import { AppRoute, CITIES } from '../../const';
import { City } from '../../types/city';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

const mapStateToProps = (state: State) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onTabClick(city: City) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Tabs({ city, onTabClick }: PropsFromRedux): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((c) => (
              <li key={c.name} className="locations__item">
                <Link
                  className={`locations__item-link tabs__item ${c.name === city.name ? 'tabs__item--active' : ''}`}
                  to={AppRoute.Root}
                  onClick={() => onTabClick(c)}
                >
                  <span>{c.name}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export { Tabs };
export default connector(Tabs);
