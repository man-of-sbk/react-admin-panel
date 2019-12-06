import React from 'react';
import PropTypes from 'prop-types';

import RightNav from './components/RightNav';
import LeftNav from './components/LeftNav';
import Wrapper from './Wrapper';

const Header = ({ onToggleMenu, menuIsClose }) => {
  return (
    <Wrapper menuIsClose={menuIsClose}>
      <LeftNav onToggleMenu={onToggleMenu} />
      <RightNav />
    </Wrapper>
  );
};

Header.propTypes = {
  onToggleMenu: PropTypes.func,
  menuIsClose: PropTypes.bool,
};

export default Header;
