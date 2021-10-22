import {
  GET_QUOTES,
  LOAD_QUOTES_SUCCESS,
  LOAD_QUOTES_ERROR,
} from '../constants';

import { getQuotes, quotesLoaded, quoteLoadingError } from '../actions';

describe('App Actions', () => {
  describe('getQuotes', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_QUOTES,
      };

      expect(getQuotes()).toEqual(expectedResult);
    });
  });

  describe('quotesLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const newQuote = 'test';
      const expectedResult = {
        type: LOAD_QUOTES_SUCCESS,
        repos: fixture,
        newQuote,
      };

      expect(quotesLoaded(fixture, newQuote)).toEqual(expectedResult);
    });
  });

  describe('quoteLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_QUOTES_ERROR,
        error: fixture,
      };

      expect(quoteLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
