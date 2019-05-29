import {
  GET_SPLYT_DRIVERS_START,
  GET_SPLYT_DRIVERS_SUCCESS,
  GET_SPLYT_DRIVERS_ERROR,
} from './constants';

export function getSplytDriversStart() {
  return {
    type: GET_SPLYT_DRIVERS_START,
  };
}

export function getSplytDriversSuccess(data) {
  return {
    type: GET_SPLYT_DRIVERS_SUCCESS,
    data,
  };
}

export function getSplytDriversError(error) {
  return {
    type: GET_SPLYT_DRIVERS_ERROR,
    error,
  };
}
