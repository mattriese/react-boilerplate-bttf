/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectQuotes,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { getQuotes } from '../App/actions';
import { makeSelectUsername } from '../FeaturePage/selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ quotes, loading, error, populateQuotesList }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // console.log('quotes in homepage (props) ===--===', quotes);

  useEffect(() => {
    console.log('populate useEffect ran');
    populateQuotesList();
  }, []);

  const reposListProps = {
    loading,
    error,
    quotes,
  };
  // console.log('reposListProps in homepage/index0000000', reposListProps);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <ReposList {...reposListProps} />
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
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  quotes: makeSelectQuotes(),
});

export function mapDispatchToProps(dispatch) {
  return { populateQuotesList: () => dispatch(getQuotes()) };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
