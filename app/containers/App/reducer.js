/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_QUOTES_ERROR,
  LOAD_QUOTES_SUCCESS,
  NEWQUOTE_SAVE_SUCCESS,
  RESET_SUCCESS,
  RESET_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  quotes: [],
  success: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_QUOTES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        draft.success = false;
        break;

      case LOAD_QUOTES_SUCCESS:
        draft.quotes = action.quotes;
        draft.loading = false;
        draft.success = false;
        break;

      case NEWQUOTE_SAVE_SUCCESS:
        draft.quotes = [action.savedQuote, ...state.quotes];
        draft.loading = false;
        draft.success = true;
        break;

      case RESET_SUCCESS:
        draft.quotes = draft.quotes;
        draft.loading = false;
        draft.success = false;
        break;

      case RESET_ERROR:
        draft.quotes = draft.quotes;
        draft.error = false;
        draft.loading = false;
        draft.success = false;
        break;
    }
  });

export default appReducer;
