const PERCENT = 100;
const SCALE = 5;

export const starRating = (rating: number): number => rating * PERCENT / SCALE;
