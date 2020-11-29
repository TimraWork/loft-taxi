import React from 'react';
import Map from './Map';
import MapForm from './MapForm';
import ErrorBoundary from './ErrorBoundary';

export const PageMap = () => (
  <ErrorBoundary>
    <Map />
    <MapForm />
  </ErrorBoundary>
);
