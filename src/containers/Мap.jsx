import React, {useEffect} from 'react';
import {MapBoxGL} from './MapBoxGL';
import {MapForm} from '../components/MapForm';
import ErrorBoundary from '../utils/ErrorBoundary';

import {connect} from 'react-redux';
import {getAddressList} from '../modules/addressList';

const Map = ({addressList, getAddressList}) => {
  useEffect(() => {
    getAddressList();
  }, [getAddressList]);

  return (
    <ErrorBoundary>
      <MapBoxGL />
      <MapForm locations={addressList} />
    </ErrorBoundary>
  );
};

export const MapWithAuth = connect((state) => ({addressList: state.addressList}), {getAddressList})(Map);
