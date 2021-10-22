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
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
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
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} newQuote The current newQuote
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, newQuote) {
  console.log('repos in reposLoaded ACTION~~~ ', repos);
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    newQuote,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  console.log('repoLoadingError ran, error:::::::::', error);
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
