import { ActionType } from '../types/action';
import { City } from '../types/city';
import { Offers } from '../types/offer';

export const changeCity = (city: City) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const loadOffers = (offers: Offers) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const );
