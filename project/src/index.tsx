import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import { CITIES } from './const';
import { offers } from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} cities={CITIES} />
  </React.StrictMode>,
  document.getElementById('root'));
