import React, {useEffect, useState} from 'react';
import {MapBoxGL} from './MapBoxGL';
import {MapForm} from '../components/MapForm';
import {MapProfile} from '../components/MapProfile';
import ErrorBoundary from '../utils/ErrorBoundary';

import {connect} from 'react-redux';
import {getAddressList} from '../modules/addressList';
import {getRoute} from '../modules/route';
import {MapFormSuccess} from '../components/MapFormSuccess';
import {isObjNotEmpty} from '../utils/functions';

const Map = ({addressList, getAddressList, getRoute, profile}) => {
  useEffect(() => {
    getAddressList();
  }, [getAddressList]);

  const [isMapUpdated, setMapUpdated] = useState(false);

  const [locationsFrom, setLocationsFrom] = useState(addressList);
  const [locationsTo, setLocationsTo] = useState(addressList);
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');

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

  const handleOrderOnClick = () => {
    getRoute(locationFrom, locationTo);
    setMapUpdated(true);
  };

  const handleNewOrderClick = (e) => {
    e.preventDefault();
    getRoute(setLocationFrom(''), setLocationTo(''));
    setMapUpdated(false);
  };

  return (
    <ErrorBoundary>
      <MapBoxGL />
      {isMapUpdated && <MapFormSuccess handleNewOrderClick={handleNewOrderClick} />}
      {isObjNotEmpty(profile) && !isMapUpdated && (
        <MapForm
          locations={addressList}
          locationsTo={locationsTo}
          locationFrom={locationFrom}
          locationTo={locationTo}
          locationsFrom={locationsFrom}
          handleLocationFromOnChange={handleLocationFromOnChange}
          handleLocationToOnChange={handleLocationToOnChange}
          handleOrderOnClick={handleOrderOnClick}
        />
      )}
      {!isObjNotEmpty(profile) && !isMapUpdated && <MapProfile />}
    </ErrorBoundary>
  );
};

const mapStateToProps = (state) => ({addressList: state.addressList, route: state.route, profile: state.profile});
export const MapWithAuth = connect(mapStateToProps, {getAddressList, getRoute})(Map);
