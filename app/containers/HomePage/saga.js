/**
 * Gets the list of quotes from the server and updates the list on form submission
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { ADD_QUOTE, GET_QUOTES } from 'containers/App/constants';
import {
  quoteLoadingError,
  quotesLoaded,
  newQuoteSaved,
} from 'containers/App/actions';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import request from 'utils/request';
import { makeSelectNewQuote } from 'containers/AddQuotePage/selectors';
import { resetNewQuote } from '../AddQuotePage/actions';

const REQUEST_URL = `http://localhost:3001/quotes`;

/**
 * Calls api to add new quote
 */
export function* requestAddQuote() {
  // Select newQuote from store
  const newQuote = yield select(makeSelectNewQuote());
  // const notify = () => toast('Wow so easy !');
  // Ideally this form validation would be in the form submit handler
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
      const response = yield call(request, REQUEST_URL, req);
      yield put(newQuoteSaved(response.savedQuote));
      yield put(resetNewQuote());
      yield put(push('/'));
    } catch (err) {
      console.log('error in requestADD', err);
      yield put(quoteLoadingError(err.message));
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
    yield put(quotesLoaded(quotes.quotes));
  } catch (err) {
    yield put(quoteLoadingError(err.message));
  }
}

/**
 * Watcher saga manages watcher lifecycle
 */
export default function* watcherSaga() {
  // Watches for GET_QUOTES actions and calls getQuotes when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_QUOTES, requestGetQuotes);
  yield takeLatest(ADD_QUOTE, requestAddQuote);
}
