import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import { CITIES } from './const';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      cities={CITIES}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
