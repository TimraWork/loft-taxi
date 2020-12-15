import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

export class MapBoxGL extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA';

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr',
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  }

  componentDidUpdate(prevProps) {
    const {coordinates} = this.props;
    if (coordinates !== prevProps.coordinates) {
      this.map.flyTo({
        center: coordinates[0],
        zoom: 15,
      });
      this.map.addLayer({
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
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className="map" ref={(el) => (this.mapContainer = el)} />;
  }
}
