import produce from 'immer';

import homeReducer from '../reducer';
import { changeNewQuote } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      newQuote: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeNewQuote action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = produce(state, draft => {
      draft.newQuote = fixture;
    });

    expect(homeReducer(state, changeNewQuote(fixture))).toEqual(expectedResult);
  });
});
