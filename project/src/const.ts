export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PlaceType {
  Main = 'MAIN',
  Favorites = 'FAVORITES',
  NearPlaces = 'NEAR_PLACES',
}

export const PlaceCardType = {
  MAIN: {
    type: 'cities',
    className: 'cities__place-card place-card',
    classNameInfo: 'place-card__info',
    width: '260',
    height: '200',
  },
  FAVORITES: {
    type: 'favorites',
    className: 'favorites__card place-card',
    classNameInfo: 'favorites__card-info place-card__info',
    width: '150',
    height: '110',
  },
  NEAR_PLACES: {
    type: 'near-places',
    className: 'near-places__card place-card',
    classNameInfo: 'place-card__info',
    width: '260',
    height: '200',
  },
} as const;

export const RATING_STARS = [
  {stars: '5', title: 'perfect'},
  {stars: '4', title: 'good'},
  {stars: '3', title: 'not bad'},
  {stars: '2', title: 'badly'},
  {stars: '1', title: 'terrible'},
] as const;

export const MAP_HEIGHT = '682px';
export const DEFAULT_ICON = 'img/pin.svg';
export const CURRENT_ICON = 'img/pin-active.svg';
export const IconSize = {
  WIDTH: 27,
  HEIGHT: 39,
};

export const CITIES = [
  {
    location: {
      latitude: 52.3740300,
      longitude: 4.8896900,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
];
