import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';

import Wrapper from './Wrapper';

const SearchBar = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  let searchInputRef;

  const handleToggleSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const getSearchInputRef = input => {
    searchInputRef = input;
  };

  useEffect(() => {
    if (openSearchBar) searchInputRef.focus();
  }, [openSearchBar]);

  return (
    <Wrapper className="flat-ul-li">
      <Icon
        type={openSearchBar ? 'close' : 'search'}
        onClick={handleToggleSearchBar}
        className="search-bar-toggle"
      />
      <Input
        className={openSearchBar ? 'd-init' : 'd-none'}
        placeholder="Search..."
        ref={getSearchInputRef}
      />
    </Wrapper>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
