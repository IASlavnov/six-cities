import { ActionType } from '../types/action';
import { City } from '../types/city';
import { Offers } from '../types/offer';

export const changeCity = (city: City) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const setOffers = (offers: Offers) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);
