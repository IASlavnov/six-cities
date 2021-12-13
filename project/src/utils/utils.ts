import { Offers } from '../types/offer';

const PERCENT = 100;
const SCALE = 5;

export const starRating = (rating: number): number => rating * PERCENT / SCALE;

export const sortOffers = (offers: Offers, sortType: string): Offers => {
  switch (sortType) {
    case 'Price: low to high':
      return offers.slice().sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return offers.slice().sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const adaptOffers = (offers: any): Offers => offers?.map((offer: any) => ({
  ...offer,
  isFavorite: offer.is_favorite,
  isPremium: offer.is_premium,
  maxAdults: offer.max_adults,
  previewImage: offer.preview_image,
  host: {
    ...offer.host,
    avatarUrl: offer.host.avatar_url,
    isPro: offer.host.is_pro,
  },
}));
