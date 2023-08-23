import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-73.59650894080931);
  const [lat] = useState(45.463880377238084);
  const [zoom] = useState(14);
  const [API_KEY] = useState('BbkPXjBzCitg49sEjXYS');

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });

    new maplibregl.Marker({color: "#FF0000"})
    .setLngLat([-73.59648779185818, 45.463880377238084])
    .addTo(map.current);

  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}