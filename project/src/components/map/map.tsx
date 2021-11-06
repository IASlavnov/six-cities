import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';

import useMap from '../../hooks/useMap';
import { MAP_HEIGHT, DEFAULT_ICON, CURRENT_ICON, IconSize } from '../../const';
import { Offers } from '../../types/offer';
import { City } from '../../types/city';

import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offers,
  city: City,
  selectedCard: number | null,
  className?: string,
};

function Map({ city, offers, selectedCard, className = 'cities__map' }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: DEFAULT_ICON,
    iconSize: [IconSize.WIDTH, IconSize.HEIGHT],
    iconAnchor: [IconSize.WIDTH / 2, IconSize.HEIGHT],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: CURRENT_ICON,
    iconSize: [IconSize.WIDTH, IconSize.HEIGHT],
    iconAnchor: [IconSize.WIDTH / 2, IconSize.HEIGHT],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: (offer.id === selectedCard)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedCard, currentCustomIcon, defaultCustomIcon]);

  return (
    <section
      className={`map ${className}`}
      style={{ height: MAP_HEIGHT }}
      ref={mapRef}
    />
  );
}

export default Map;
