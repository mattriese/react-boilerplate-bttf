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

import { useInjectReducer } from 'utils/injectReducer';
import H2 from 'components/H2';
import Form from './Form';
import Input from './Input';
import { addQuote } from '../App/actions';
import { changeNewQuote } from './actions';
import { makeSelectNewQuote } from './selectors';
import reducer from './reducer';

const key = 'AddQuote';

export function AddQuotePage({ onSubmitForm, onChangeNewQuote, newQuote }) {
  useInjectReducer({ key, reducer });
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
        <label htmlFor="newQuote">
          <Input
            id="newQuote"
            type="text"
            placeholder="This is heavy, Doc"
            value={newQuote}
            onChange={onChangeNewQuote}
          />
        </label>
      </Form>
    </div>
  );
}

AddQuotePage.propTypes = {
  onSubmitForm: PropTypes.func,
  newQuote: PropTypes.string,
  onChangeNewQuote: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newQuote: makeSelectNewQuote(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeNewQuote: evt => dispatch(changeNewQuote(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // console.log('evt.target.value===', evt.target.value);
      // console.log('newQuote in onsubmitform===', newQuote);
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
