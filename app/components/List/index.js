import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';
const uuidv4 = require('uuid/v4');

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;
  console.log('List:::: props.quotes', props.quotes);
  // If we have items, render them
  if (props.quotes) {
    content = props.quotes.map(quote => (
      <ComponentToRender key={`item-${uuidv4()}`} quote={quote} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  quotes: PropTypes.array,
};

export default List;
