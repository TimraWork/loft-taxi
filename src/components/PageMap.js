import React, {useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';

const PageMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA';
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr',
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div className="map" ref={mapRef} />;
};

export default PageMap;
