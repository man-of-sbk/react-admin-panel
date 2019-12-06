import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'antd/lib/avatar';

import Wrapper from './Wrapper';

const SearchBar = ({ username }) => {
  return (
    <Wrapper className="flat-ul-li">
      <Avatar />
      <span className="user-name">{username}</span>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  username: PropTypes.string,
};

export default SearchBar;
