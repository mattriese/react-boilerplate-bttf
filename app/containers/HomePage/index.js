/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectQuotes,
} from 'containers/App/selectors';
import QuotesList from 'components/QuotesList';
import CenteredSection from './CenteredSection';
import Section from './Section';
import { getQuotes } from '../App/actions';
import saga from './saga';

const key = 'home';

export function HomePage({ quotes, loading, error, populateQuotesList }) {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    populateQuotesList();
  }, []);

  const quotesListProps = {
    loading,
    error,
    quotes,
  };

  return (
    <article>
      <Helmet>
        <title>Quotes List</title>
        <meta name="description" content="Back to the Future Quotes homepage" />
      </Helmet>
      <div>
        <CenteredSection>
          <h2>
            <i>Back to the Future</i> quotes:
          </h2>
        </CenteredSection>
        <Section>
          <QuotesList {...quotesListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  quotes: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  populateQuotesList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  quotes: makeSelectQuotes(),
});

export function mapDispatchToProps(dispatch) {
  return {
    populateQuotesList: () => dispatch(getQuotes()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
