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
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const moviesReducer = (state = initialState, action) => {
  console.log('action', action);
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
    }
  });
};

export default moviesReducer;
