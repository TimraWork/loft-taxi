import React, {useEffect, useState} from 'react';
import {MapBoxGL} from './MapBoxGL';
import {MapForm} from '../components/MapForm';
import ErrorBoundary from '../utils/ErrorBoundary';

import {connect} from 'react-redux';
import {getAddressList} from '../modules/addressList';
import {getRoute} from '../modules/route';

const Map = ({addressList, getAddressList, route, getRoute}) => {
  useEffect(() => {
    getAddressList();
  }, [getAddressList]);

  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');

  const [locationsFrom, setLocationsFrom] = useState(addressList);
  const [locationsTo, setLocationsTo] = useState(addressList);

  const [coordinates, setCoordinates] = useState([]);

  const handleLocationFromOnChange = (e) => {
    setLocationFrom(e.target.textContent);
    const inputValue = addressList.filter((el) => el !== e.target.textContent);
    setLocationsTo(inputValue);
  };

  const handleLocationToOnChange = (e) => {
    setLocationTo(e.target.textContent);
    const inputValue = addressList.filter((el) => el !== e.target.textContent);
    setLocationsFrom(inputValue);
  };

  const handleOrderOnClick = (e) => {
    console.log('locationFrom, locationTo =', locationFrom, locationTo);
    e.preventDefault();
    getRoute(locationFrom, locationTo);
    setCoordinates(route);
  };

  return (
    <ErrorBoundary>
      <MapBoxGL coordinates={coordinates} />
      <MapForm
        locations={addressList}
        locationsTo={locationsTo}
        locationsFrom={locationsFrom}
        handleLocationFromOnChange={handleLocationFromOnChange}
        handleLocationToOnChange={handleLocationToOnChange}
        handleOrderOnClick={handleOrderOnClick}
      />
    </ErrorBoundary>
  );
};

const mapStateToProps = (state) => ({addressList: state.addressList, route: state.route});

export const MapWithAuth = connect(mapStateToProps, {getAddressList, getRoute})(Map);
