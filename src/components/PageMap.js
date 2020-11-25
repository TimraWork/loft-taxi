import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';

class PageMap extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr',
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
    };

    return <div style={style} ref={(el) => (this.mapContainer = el)} />;
  }
}

export default PageMap;
