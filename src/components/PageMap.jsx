import React from 'react';
import {Map} from './Map';
import {MapForm} from './MapForm';
import ErrorBoundary from './ErrorBoundary';
import {withAuth} from './hoc/AuthContext';

export const PageMap = () => (
  <ErrorBoundary>
    <Map />
    <MapForm />
  </ErrorBoundary>
);

export const PageMapWithAuth = withAuth(PageMap);
