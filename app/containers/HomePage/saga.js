/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, GET_QUOTES } from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  quotesLoaded,
} from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `http://localhost:3001/quotes`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    console.log('repos after api call====', repos);
    // const repos = ['oops', 'scott', 'Marty', 'this', 'heavy'];
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Github repos request/response handler
 */
export function* requestGetQuotes() {
  // Select username from store
  const requestURL = `http://localhost:3001/quotes`;

  try {
    // Call our request helper (see 'utils/request')
    const quotes = yield call(request, requestURL);
    console.log('quotes after api call====', quotes);
    // const quotes = ['oops', 'scott', 'Marty', 'this', 'heavy'];
    yield put(quotesLoaded(quotes.quotes));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_QUOTES, requestGetQuotes);
  yield takeLatest(LOAD_REPOS, getRepos);
}
