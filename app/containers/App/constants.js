/*
 * AppConstants

 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_QUOTES = 'boilerplate/App/GET_QUOTES';
export const ADD_QUOTE = 'boilerplate/App/ADD_QUOTE';
export const LOAD_QUOTES_SUCCESS = 'boilerplate/App/LOAD_QUOTES_SUCCESS';
export const LOAD_QUOTES_ERROR = 'boilerplate/App/LOAD_QUOTES_ERROR';
export const NEWQUOTE_SAVE_SUCCESS = 'boilerplate/App/NEWQUOTE_SAVE_SUCCESS';
export const RESET_SUCCESS = 'boilerplate/App/RESET_SUCCESS';
export const RESET_ERROR = 'boilerplate/App/RESET_ERROR';
