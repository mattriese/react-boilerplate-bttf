/**
 * AddQuotePage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddQuote = state => state.AddQuote || initialState;

const makeSelectNewQuote = () =>
  createSelector(
    selectAddQuote,
    AddQuoteState => AddQuoteState.newQuote,
  );

export { selectAddQuote, makeSelectNewQuote };
