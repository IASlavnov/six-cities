import MainScreen from '../main-screen/main-screen';

import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[],
};

function App({ offers }: AppProps): JSX.Element {
  return <MainScreen offers={offers} />;
}

export default App;
