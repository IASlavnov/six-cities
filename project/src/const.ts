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
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom: 10,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.9333300,
      longitude: 6.9500000,
      zoom: 10,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.8504500,
      longitude: 4.3487800,
      zoom: 10,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.3740300,
      longitude: 4.8896900,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.5753200,
      longitude: 10.0153400,
      zoom: 10,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.2217200,
      longitude: 6.7761600,
      zoom: 10,
    },
    name: 'Dusseldorf',
  },
];

export const DEFAULT_CITY = CITIES[0];

export const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;
