import React, { useRef, useEffect, useState } from 'react';
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
    let maplibregl;
    if (typeof window !== 'undefined') {
      maplibregl = require('maplibre-gl');
    } else {
      return;
    }

    if (map.current) return; // stops map from initializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    // Winter location
    new maplibregl.Marker({ color: "#66ccff" })
      .setLngLat([-73.59484099876273, 45.46375924091796])
      .addTo(map.current);

    // Summer location
    new maplibregl.Marker({ color: "#ff6600" })
      .setLngLat([-73.596964, 45.463773])
      .addTo(map.current);
  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}