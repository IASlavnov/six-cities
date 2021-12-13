import { useEffect, useRef } from 'react';
import leaflet, { Marker } from 'leaflet';

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
    if(map) {
      map.flyTo([city.location.latitude, city.location.longitude], 10);
    }
  });

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id === selectedCard
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);

        markers.push(marker);
      });
    }

    return () => markers.forEach((marker) => marker.remove());
  }, [map, offers, selectedCard]);

  return (
    <section
      className={`map ${className}`}
      style={{ height: MAP_HEIGHT }}
      ref={mapRef}
    />
  );
}

export default Map;
