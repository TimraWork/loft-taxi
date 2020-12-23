import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import {connect} from 'react-redux';
import {getMapLayerParams} from '../utils/mapLayerParams';
class Map extends Component {
  initialCenterMap = [30.3056504, 59.9429126];
  initialZoom = 10;

  removeMapLayer = (map) => {
    const mapLayer = map.getLayer('route');
    if (mapLayer) {
      map.removeLayer('route').removeSource('route');
    }
  };

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA';

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr',
      center: this.initialCenterMap,
      zoom: this.initialZoom
    });
  }

  componentDidUpdate() {
    const coordinates = this.props.route;

    if (coordinates && coordinates.length) {
      this.map.flyTo({
        center: coordinates[0],
        zoom: 13
      });

      this.removeMapLayer(this.map);
      this.map.addLayer(getMapLayerParams(coordinates));
    } else {
      this.map.flyTo({
        center: this.initialCenterMap,
        zoom: this.initialZoom
      });

      this.removeMapLayer(this.map);
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
