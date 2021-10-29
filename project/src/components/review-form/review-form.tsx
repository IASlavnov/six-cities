import { ChangeEvent, useState, Fragment } from 'react';

import { RATING_STARS } from '../../const';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(1);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATING_STARS.map(({stars, title}) => (
            <Fragment key={stars}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={stars}
                id={`${stars}-stars`}
                checked={rating === +stars}
                onChange={({target}: ChangeEvent<HTMLInputElement>) => setRating(+target.value)}
                type="radio"
              />
              <label htmlFor={`${stars}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => setReview(target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
