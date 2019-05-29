/*
 * HomePageReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  GET_SPLYT_DRIVERS_START,
  GET_SPLYT_DRIVERS_SUCCESS,
  GET_SPLYT_DRIVERS_ERROR,
  SET_LOCATION,
  SET_COUNT,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  data: [],
  meta: {
    location: {
      latitude: 51.5049375,
      longitude: -0.0964509,
    },
    count: 10,
  },
};

/* eslint-disable default-case, no-param-reassign */
const moviesReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_SPLYT_DRIVERS_START:
        draft.loading = true;
        draft.error = false;
        break;

      case GET_SPLYT_DRIVERS_SUCCESS:
        draft.loading = false;
        draft.data = action.data;

        break;

      case GET_SPLYT_DRIVERS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case SET_LOCATION:
        draft.meta.location = action.location;
        break;
      case SET_COUNT:
        draft.meta.count = action.count;
        draft.loading = false;
        break;
    }
  });
};

export default moviesReducer;
