/*
 * AddQuotePage
 *
 * List all the features
 */
import React, { memo } from 'react';
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

export function AddQuotePage({ onSubmitForm, onChangeUsername, username }) {
  return (
    <div>
      <Helmet>
        <title>Add a quote to the list:</title>
        <meta name="description" content="Submit a quote to the list" />
      </Helmet>
      <H2>
        Add a <i>Back to the Future</i> quote:
      </H2>
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

AddQuotePage.propTypes = {
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
      console.log('evt in onsubmitForm====', evt);
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
)(AddQuotePage);
