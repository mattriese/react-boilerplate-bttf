/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import H2 from 'components/H2';
import Form from './Form';
import Input from './Input';
import { addQuote } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

export function FeaturePage({ onSubmitForm, onChangeUsername, username }) {
  useEffect(() => {
    console.log('XXXXXXXXX onsubmit useEffect ran');
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Add a quote to the list:</title>
        <meta name="description" content="Submit a quote to the list" />
      </Helmet>
      <H2>Add a Back to the Future quote:</H2>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="username">
          <Input
            id="username"
            type="text"
            placeholder="This is heavy, Doc"
            value={username}
            onChange={onChangeUsername}
          />
        </label>
      </Form>
    </div>
  );
}

FeaturePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // console.log('evt.target.value===', evt.target.value);
      // console.log('username in onsubmitform===', username);
      dispatch(addQuote());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FeaturePage);
