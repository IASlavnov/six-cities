import { Link } from 'react-router-dom';

import { AppRoute, PlaceCardType, PlaceType } from '../../const';
import { starRating } from '../../utils/utils';
import { Offer } from '../../types/offer';

type PlaceCardProps = {
  offer: Offer,
  onMouseOver?: () => void,
  onMouseOut?: () => void,
  placeType: PlaceType,
};

function PlaceCard({ offer, onMouseOver, onMouseOut, placeType }: PlaceCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, rating, title, type } = offer;

  // Если рейтинг по 5-бальной шкале приходит с бэка
  const starsRating = starRating(rating);

  return (
    <article
      className={PlaceCardType[placeType].className}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {placeType === PlaceType.Main && isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${PlaceCardType[placeType].type}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={PlaceCardType[placeType].width}
            height={PlaceCardType[placeType].height}
            alt="Place"
          />
        </Link>
      </div>
      <div className={PlaceCardType[placeType].classNameInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${starsRating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
