import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { NotFoundScreen } from '../index';
import Header from '../../header/header';
import ReviewsList from '../../reviews-list/reviews-list';
import ReviewForm from '../../review-form/review-form';
import Map from '../../map/map';
import PlacesList from '../../places-list/places-list';

import { starRating } from '../../../utils/utils';
import { Offers } from '../../../types/offer';
import { Reviews } from '../../../types/review';
import { Cities } from '../../../types/city';

type RoomScreenProps = {
  offers: Offers,
  reviews: Reviews,
  cities: Cities,
};

const MAX_IMAGE_FOR_GALLERY = 6;

function RoomScreen({ offers, reviews, cities }: RoomScreenProps): JSX.Element {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const onCardItemHover = (cardId: number | null) => {
    setSelectedCard(cardId);
  };

  const { id } = useParams<{ id: string }>();
  const offer = offers.find((o) => o.id === +id);

  if (!offer) {
    return <NotFoundScreen />;
  }

  const {
    images, isPremium, title, isFavorite, rating, type,
    bedrooms, maxAdults, price, goods, host, description,
  } = offer;
  const starsRating = starRating(rating);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images
                  .slice(0, MAX_IMAGE_FOR_GALLERY)
                  .map((image) => (
                    <div key={image} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="studio" />
                    </div>
                  ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`}
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">{isFavorite ? 'In Bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${starsRating}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item) => (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map
            city={cities[0]}
            offers={offers}
            selectedCard={selectedCard}
            className='property__map'
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              offers={offers}
              onCardItemHover={onCardItemHover}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;
