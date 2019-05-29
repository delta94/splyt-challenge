/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_SPLYT_DRIVERS_START } from 'app/containers/HomePage/constants';
import { getSplytDriversSuccess, getSplytDriversError } from 'app/containers/HomePage/actions';
import { makeSelectLocation, makeSelectCount } from './selectors';

import request, { METHOD_TYPES, methodOptions } from 'utils/request';

export function* getSplytDrivers() {
  const location = yield select(makeSelectLocation());
  const count = yield select(makeSelectCount());

  // Call our request helper (see 'utils/request')
  const requestURL = `https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?latitude=${
    location.latitude
  }&longitude=${location.longitude}&count=${count}`;

  // TODO: select latitude, longitude and count from store
  // @dev https://cors-anywhere.herokuapp.com is added for handling cors issue

  try {
    const options = methodOptions(METHOD_TYPES.GET);
    const response = yield call(request, requestURL, options);
    yield put(getSplytDriversSuccess(response));
  } catch (err) {
    yield put(getSplytDriversError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  yield takeLatest(GET_SPLYT_DRIVERS_START, getSplytDrivers);
}
