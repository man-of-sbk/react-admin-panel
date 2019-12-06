import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';

import SearchBar from './components/SearchBar';
import Wrapper from './Wrapper';

const LeftNav = ({ onToggleMenu }) => {
  return (
    <Wrapper className="left-nav">
      <ul className="flat-ul">
        <li className="flat-ul-li">
          <Icon
            className="side-bar-toggle"
            type="menu"
            onClick={onToggleMenu}
          />
        </li>
        <SearchBar />
      </ul>
    </Wrapper>
  );
};

LeftNav.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default LeftNav;
