/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectNewQuote = () =>
  createSelector(
    selectHome,
    homeState => homeState.newQuote,
  );

export { selectHome, makeSelectNewQuote };
