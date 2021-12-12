import { DEFAULT_CITY } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, city: action.payload };
    case ActionType.LoadOffers:
      return { ...state, offers: action.payload, isDataLoaded: true };
    default:
      return state;
  }
};

export { reducer };
