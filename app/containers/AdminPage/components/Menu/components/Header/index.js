/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Icon from 'antd/lib/icon';

import Wrapper from './Wrapper';

const Header = ({ setCloseMenu, content, width, close }) => {
  const handleOnCloseMenu = () => {
    setCloseMenu(true);
  };

  return (
    <Wrapper className="header" width={width} close={close}>
      <section className="content">
        <section className="left-section">
          <span className="header-link" to="/">
            <img
              src="https://colorlib.com/polygon/adminator/assets/static/images/logo.png"
              alt="admin-panel logo"
            />
            <div>{content}</div>
          </span>
        </section>
        <section className="right-section" onClick={handleOnCloseMenu}>
          <Icon className="close-menu" type="left-circle" />
        </section>
      </section>
    </Wrapper>
  );
};

Header.propTypes = {
  setCloseMenu: PropTypes.func,
  content: PropTypes.string,
  width: PropTypes.number,
  close: PropTypes.bool,
};

export default Header;
