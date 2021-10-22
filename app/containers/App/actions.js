/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_QUOTES,
  ADD_QUOTE,
  LOAD_QUOTES_SUCCESS,
  LOAD_QUOTES_ERROR,
} from './constants';

/**
 * Add new quote to quote list Dispatched from component to watcher saga
 *
 * @returns {object} an object with a type of ADD_QUOTE
 */
export function addQuote() {
  return {
    type: ADD_QUOTE,
  };
}

/**
 * Dispatched by worker saga after api loads default quotes
 * @returns {object}      An action object with a type of ??? passing the quotes
 */
export function getQuotes() {
  return {
    type: GET_QUOTES,
  };
}

/**
 * Dispatched when the quotes are loaded by the request saga
 *
 * @param  {array} quotes The quotes data
 *
 * @return {object}      An action object with a type of LOAD_QUOTES_SUCCESS passing the quotes
 */
export function quotesLoaded(quotes) {
  return {
    type: LOAD_QUOTES_SUCCESS,
    quotes,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_QUOTES_ERROR passing the error
 */
export function quoteLoadingError(error) {
  return {
    type: LOAD_QUOTES_ERROR,
    error,
  };
}
