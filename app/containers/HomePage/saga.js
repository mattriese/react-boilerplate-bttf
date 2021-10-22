/**
 * Gets the list of quotes from the server
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { ADD_QUOTE, GET_QUOTES } from 'containers/App/constants';
import { quoteLoadingError, quotesLoaded } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectNewQuote } from 'containers/AddQuotePage/selectors';
import { resetNewQuote } from '../AddQuotePage/actions';

const REQUEST_URL = `http://localhost:3001/quotes`;
/**
 * Quotes request/response handler
 */
export function* requestAddQuote() {
  // Select newQuote from store
  const newQuote = yield select(makeSelectNewQuote());

  if (newQuote && newQuote.trim().length > 0) {
    try {
      // Call our request helper (see 'utils/request')
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newQuote }),
      };
      const quotes = yield call(request, REQUEST_URL, req);
      yield put(quotesLoaded(quotes.quotes));
      yield put(resetNewQuote());
      yield put(push('/'));
    } catch (err) {
      yield put(quoteLoadingError(err));
    }
  }
}

/**
 * Get current quotes list from backend and send to store
 */
export function* requestGetQuotes() {
  try {
    // Call our request helper (see 'utils/request')
    const quotes = yield call(request, REQUEST_URL);
    console.log('quotes after api call====', quotes);
    yield put(quotesLoaded(quotes.quotes));
  } catch (err) {
    yield put(quoteLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watcherSaga() {
  // Watches for GET_QUOTES actions and calls getQuotes when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_QUOTES, requestGetQuotes);
  yield takeLatest(ADD_QUOTE, requestAddQuote);
}
