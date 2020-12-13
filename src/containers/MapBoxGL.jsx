import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';

export const MapBoxGL = ({coordinates}) => {
  let mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA';
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr',
      center: [30.3056504, 59.9429126],
      zoom: 10
    });

    map.on('load', function () {
      if (coordinates) {
        map.flyTo({
          center: coordinates[0],
          zoom: 15
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates
              }
            }
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#ffc617',
            'line-width': 8
          }
        });
      }
    });

    return () => {
      map.remove();
    };
  }, [coordinates]);

  return <div className="map" ref={mapRef} />;
};
