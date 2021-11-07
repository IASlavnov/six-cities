import { DEFAULT_CITY } from '../const';
import { ActionType } from '../types/action';
import { State } from '../types/state';
import { Actions } from '../types/action';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.SetOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export { reducer };
