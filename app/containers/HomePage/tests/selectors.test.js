import { selectHome, makeSelectNewQuote } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      userData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectNewQuote', () => {
  const newQuoteSelector = makeSelectNewQuote();
  it('should select the newQuote', () => {
    const newQuote = 'mxstbr';
    const mockedState = {
      home: {
        newQuote,
      },
    };
    expect(newQuoteSelector(mockedState)).toEqual(newQuote);
  });
});
