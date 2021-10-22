import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectLocation } from 'containers/App/selectors';
import PropTypes from 'prop-types';
import Banner from './bttf.png';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

function Header({ location }) {
  return (
    <div>
      <Img src={Banner} alt="Back to the Future - Logo" />
      <NavBar>
        <HeaderLink to="/" location={location.pathname}>
          Home
        </HeaderLink>
        <HeaderLink to="/addQuote" location={location.pathname}>
          Add Quote
        </HeaderLink>
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Header);
