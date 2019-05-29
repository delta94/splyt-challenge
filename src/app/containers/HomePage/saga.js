/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_SPLYT_DRIVERS_START } from 'app/containers/HomePage/constants';
import { getSplytDriversSuccess, getSplytDriversError } from 'app/containers/HomePage/actions';

import request, { METHOD_TYPES, methodOptions } from 'utils/request';

export function* getSplytDrivers({ count }) {
  // @dev https://cors-anywhere.herokuapp.com is added for handling cors issue
  const requestURL = `https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509&count=1`;

  try {
    // Call our request helper (see 'utils/request')
    const options = methodOptions(METHOD_TYPES.GET);
    console.log('options', options);
    const response = yield call(request, requestURL, options);
    console.log(response);
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
