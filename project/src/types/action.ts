import { changeCity, setOffers } from '../store/action';

export enum ActionType {
  ChangeCity = 'data/changeCity',
  SetOffers = 'data/setOffers',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof setOffers>;
