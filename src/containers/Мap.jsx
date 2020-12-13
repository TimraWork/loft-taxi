import React, {useEffect, useState} from 'react';
import {MapBoxGL} from './MapBoxGL';
import {MapForm} from '../components/MapForm';
import ErrorBoundary from '../utils/ErrorBoundary';

import {connect} from 'react-redux';
import {getAddressList} from '../modules/addressList';

const Map = ({addressList, getAddressList}) => {
  useEffect(() => {
    getAddressList();
  }, [getAddressList]);

  const [locationsTo, setLocationsTo] = useState(addressList);

  const handleFromToSelectOnChange = (e) => {
    const inputValue = addressList.filter((el) => el !== e.target.textContent);
    setLocationsTo(inputValue);
  };

  return (
    <ErrorBoundary>
      <MapBoxGL />
      <MapForm locations={addressList} locationsTo={locationsTo} handleFromToSelectOnChange={handleFromToSelectOnChange} />
    </ErrorBoundary>
  );
};

export const MapWithAuth = connect((state) => ({addressList: state.addressList}), {getAddressList})(Map);
