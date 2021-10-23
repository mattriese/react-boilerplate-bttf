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
import swal from '@sweetalert/with-react';

import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectQuotes,
  makeSelectSuccess,
} from 'containers/App/selectors';
import QuotesList from 'components/QuotesList';
import CenteredSection from './CenteredSection';
import Section from './Section';
import { getQuotes, resetSuccess } from '../App/actions';
import saga from './saga';

const key = 'home';

export function HomePage({
  quotes,
  loading,
  error,
  populateQuotesList,
  success,
  resetSuccessState,
}) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!quotes || quotes.length === 0) populateQuotesList();
  }, []);

  useEffect(() => {
    console.log('reset success!!!!!');
    if (success) {
      swal(
        <div>
          <h1>Success!</h1>
          <p>Your new quote has been added to the list!</p>
        </div>,
      );
      resetSuccessState();
    }
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
  success: PropTypes.bool,
  quotes: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  populateQuotesList: PropTypes.func,
  resetSuccessState: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  quotes: makeSelectQuotes(),
  success: makeSelectSuccess(),
});

export function mapDispatchToProps(dispatch) {
  return {
    populateQuotesList: () => dispatch(getQuotes()),
    resetSuccessState: () => dispatch(resetSuccess()),
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
