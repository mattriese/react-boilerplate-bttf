/*
 * AddQuotePage
 *
 * List all the features
 */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import swal from '@sweetalert/with-react';

import { useInjectReducer } from 'utils/injectReducer';
import H2 from 'components/H2';
import SubmitButton from './SubmitButton';
import Form from './Form';
import Input from './Input';
import { addQuote, resetError } from '../App/actions';
import { changeNewQuote } from './actions';
import { makeSelectNewQuote } from './selectors';
import { makeSelectError } from '../App/selectors';
import reducer from './reducer';

const key = 'AddQuote';

export function AddQuotePage({
  onSubmitForm,
  onChangeNewQuote,
  newQuote,
  resetErrorState,
  error,
}) {
  useInjectReducer({ key, reducer });

  useEffect(() => {
    if (error) {
      swal(
        <div>
          <h1>Error</h1>
          <p>{error}</p>
        </div>,
      );
      resetErrorState();
    }
  }, [error]);

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
        <SubmitButton type="submit">submit</SubmitButton>
      </Form>
    </div>
  );
}

AddQuotePage.propTypes = {
  onSubmitForm: PropTypes.func,
  newQuote: PropTypes.string,
  onChangeNewQuote: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  resetErrorState: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newQuote: makeSelectNewQuote(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeNewQuote: evt => {
      console.log('onChange: evt.target.value===', evt.target.value);
      dispatch(changeNewQuote(evt.target.value));
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log('onSubmit: evt.target.value===', evt.target.value);
      // console.log('newQuote in onsubmitform===', newQuote);
      dispatch(addQuote());
    },
    resetErrorState: () => dispatch(resetError()),
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
