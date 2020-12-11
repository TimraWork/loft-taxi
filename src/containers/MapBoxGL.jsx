import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';

export const MapBoxGL = () => {
  let mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA';
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr',
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });

    const coordinates = [
      [30.316273, 59.940578],
      [30.316589, 59.940495],
      [30.322104, 59.942886],
      [30.324488, 59.941109],
      [30.328283, 59.940693],
      [30.326199, 59.935318],
      [30.360826, 59.930965],
      [30.339552, 59.90173],
      [30.341515, 59.894806],
      [30.361811, 59.855789],
      [30.380919, 59.818024],
      [30.379545, 59.81636],
      [30.370289, 59.815208],
      [30.35289, 59.81477],
      [30.3368, 59.810448],
      [30.334572, 59.810379],
      [30.323389, 59.812008],
      [30.32362, 59.806255],
      [30.324347, 59.793816],
      [30.317898, 59.790894],
      [30.280516, 59.797192],
      [30.275146, 59.800365],
      [30.274046, 59.800365],
      [30.272182, 59.800652],
    ];

    setTimeout(function () {
      map.on('styledata', function () {
        map.flyTo({
          center: coordinates[0],
          zoom: 15,
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
                coordinates,
              },
            },
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#ffc617',
            'line-width': 8,
          },
        });
      });
    }, 500);

    return () => {
      map.remove();
      if (map.getLayer('route')) {
        map.removeLayer('route');
      }
    };
  }, []);

  return <div className="map" ref={mapRef} />;
};
