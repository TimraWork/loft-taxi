import React, {useEffect, useState} from 'react';
import {MapBoxGL} from './MapBoxGL';
import {MapForm} from '../components/MapForm';
import {MapProfile} from '../components/MapProfile';
import ErrorBoundary from '../utils/ErrorBoundary';

import {connect} from 'react-redux';
import {getAddressList} from '../modules/addressList';
import {getRoute} from '../modules/route';

const Map = ({addressList, getAddressList, route, getRoute, profile}) => {
  useEffect(() => {
    getAddressList();
  }, [getAddressList]);

  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');

  const [locationsFrom, setLocationsFrom] = useState(addressList);
  const [locationsTo, setLocationsTo] = useState(addressList);

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
    e.preventDefault();

    getRoute(locationFrom, locationTo);
  };

  return (
    <ErrorBoundary>
      <MapBoxGL />
      {Object.keys(profile).length !== 0 ? (
        <MapForm
          locations={addressList}
          locationsTo={locationsTo}
          locationsFrom={locationsFrom}
          handleLocationFromOnChange={handleLocationFromOnChange}
          handleLocationToOnChange={handleLocationToOnChange}
          handleOrderOnClick={handleOrderOnClick}
        />
      ) : (
        <MapProfile />
      )}
    </ErrorBoundary>
  );
};

const mapStateToProps = (state) => ({addressList: state.addressList, route: state.route, profile: state.profile});

export const MapWithAuth = connect(mapStateToProps, {getAddressList, getRoute})(Map);
