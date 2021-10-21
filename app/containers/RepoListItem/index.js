/**
 * RepoListItem
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

export function RepoListItem(props) {
  const { item } = props;
  console.log('item in RepoListItem:  ----- ', item);

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <p>{item}</p>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(RepoListItem);
