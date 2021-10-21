/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

// const selectQuotes = state => state.quotes;

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectQuotes = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.quotes,
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectQuotes,
};
