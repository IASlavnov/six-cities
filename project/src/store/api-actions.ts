import { APIRoute } from '../const';
import { loadOffers } from './action';
import { ThunkActionResult } from '../types/action';
import { Offers } from '../types/offer';
import { adaptOffers } from '../utils/utils';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(adaptOffers(data)));
  };
