import { CHANGE_NEWQUOTE } from '../../HomePage/constants';

import { changeNewQuote } from '../actions';

describe('Home Actions', () => {
  describe('changeNewQuote', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_NEWQUOTE,
        newQuote: fixture,
      };

      expect(changeNewQuote(fixture)).toEqual(expectedResult);
    });
  });
});
