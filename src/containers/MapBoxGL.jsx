import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import {connect} from 'react-redux';
import {getMapLayerParams} from '../utils/mapLayerParams';
window.URL.createObjectURL = function () {};

class Map extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA';

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr',
      center: [30.3056504, 59.9429126],
      zoom: 10
    });
  }

  componentDidUpdate(prevProps) {
    const coordinates = this.props.route;
    const prevCoordinates = prevProps.route;

    if (coordinates && prevCoordinates.join('') !== coordinates.join('')) {
      this.map.flyTo({
        center: coordinates[0],
        zoom: 13
      });

      var mapLayer = this.map.getLayer('route');

      if (mapLayer) {
        this.map.removeLayer('route').removeSource('route');
      }

      this.map.addLayer(getMapLayerParams(coordinates));
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className="map" ref={(el) => (this.mapContainer = el)} />;
  }
}

export const MapBoxGL = connect((state) => ({route: state.route}))(Map);
