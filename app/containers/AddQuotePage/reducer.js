/*
 * addQuoteReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_NEWQUOTE, RESET_NEWQUOTE } from './constants';

// The initial state of the App
export const initialState = {
  newQuote: '',
};

/* eslint-disable default-case, no-param-reassign */
const addQuoteReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NEWQUOTE:
        draft.newQuote = action.newQuote;
        break;
      case RESET_NEWQUOTE:
        draft.newQuote = '';
        break;
    }
  });

export default addQuoteReducer;