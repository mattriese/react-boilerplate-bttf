import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import QuoteListItem from 'containers/QuoteListItem';

function QuotesList({ loading, error, quotes }) {
  console.log('quotes in Repos list (prop)=-=-=', quotes);
  console.log('loading in Repos list (prop)=-=-=', loading);
  console.log('error in Repos list (prop)=-=-=', error);
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (quotes !== false) {
    return <List quotes={quotes} component={QuoteListItem} />;
  }

  return null;
}

QuotesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  quotes: PropTypes.array,
};

export default QuotesList;
