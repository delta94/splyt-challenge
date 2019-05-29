import {
  GET_SPLYT_DRIVERS_START,
  GET_SPLYT_DRIVERS_SUCCESS,
  GET_SPLYT_DRIVERS_ERROR,
  SET_LOCATION,
  SET_COUNT,
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

export function setLocation({ location }) {
  return {
    type: SET_LOCATION,
    location,
  };
}
export function setCount({ count }) {
  return {
    type: SET_COUNT,
    count,
  };
}
