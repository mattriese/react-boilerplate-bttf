/**
 * Adds a new quote to the backend and then dispatches the change to the store
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { quotesLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { GET_QUOTES } from '../App/constants';

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
    yield put(quotesLoaded(quotes));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getQuotes() {
  console.log('getQuote in sagaQ ran');
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_QUOTES, requestGetQuotes);
}
