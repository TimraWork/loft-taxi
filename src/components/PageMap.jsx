import React from 'react';
import Map from './Map';
import MapForm from './MapForm';
import ErrorBoundary from './ErrorBoundary';

const PageMap = () => (
  <ErrorBoundary>
    <Map />
    <MapForm />
  </ErrorBoundary>
);

export default PageMap;
