/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const makeSelectHomeState = state => state.home || initialState;

const makeSelectLoading = () =>
  createSelector(
    makeSelectHomeState,
    homeState => homeState.loading,
  );

const makeSelectError = () =>
  createSelector(
    makeSelectHomeState,
    homeState => homeState.error,
  );

const makeSelectSplytDrivers = () =>
  createSelector(
    makeSelectHomeState,
    homeState => homeState.data.drivers,
  );

const makeSelectLocation = () =>
  createSelector(
    makeSelectHomeState,
    homeState => homeState.meta.location,
  );

const makeSelectCount = () =>
  createSelector(
    makeSelectHomeState,
    homeState => homeState.meta.count,
  );

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectHomeState,
  makeSelectLocation,
  makeSelectSplytDrivers,
  makeSelectCount,
};
