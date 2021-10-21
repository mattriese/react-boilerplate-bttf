import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  return (
    <Wrapper>
      <Item>{props.quote}</Item>
    </Wrapper>
  );
}

ListItem.propTypes = {
  quote: PropTypes.object,
};

export default ListItem;
