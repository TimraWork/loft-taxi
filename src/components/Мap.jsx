import React from 'react';
import {MapBoxGL} from '../containers/MapBoxGL';
import {MapForm} from './MapForm';
import ErrorBoundary from '../utils/ErrorBoundary';

export const Map = () => (
  <ErrorBoundary>
    <MapBoxGL />
    <MapForm />
  </ErrorBoundary>
);
