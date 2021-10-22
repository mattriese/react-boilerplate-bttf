/**
 * QuoteListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';
const uuidv4 = require('uuid/v4');

export function QuoteListItem(props) {
  const { quote } = props;
  console.log('quote in QuoteListItem:  ----- ', quote);

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <p>{quote}</p>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${uuidv4()}`} item={content} />;
}

QuoteListItem.propTypes = {
  quote: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(QuoteListItem);
