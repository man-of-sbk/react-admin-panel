/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/**
 *
 * Menu
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import AntMenu from 'antd/lib/menu';

import * as cssVars from 'cssVariables';

// *** menu links generator
import { menuLinksGenerator } from 'utils/menuLinksGenerator';
import { menuLinks } from './menuLinks';

import Header from './components/Header';

import SubLinksContainer from './components/SubLinksContainer';
import Link from './components/Link';
import Wrapper from './Wrapper';

function Menu({
  setIsClosedByHeader,
  setMenuIsHovered,
  menuIsHovered,
  setCloseMenu,
  activeWidth,
  close,
}) {
  const handleOnMouseOver = () => {
    if (menuIsHovered) return;

    if (document.documentElement.clientWidth <= cssVars.sm) {
      setMenuIsHovered(false);
      return;
    }

    setMenuIsHovered(true);
  };

  const handleOnMouseLeave = () => {
    if (!menuIsHovered) return;

    setMenuIsHovered(false);
  };

  return (
    <Wrapper
      onMouseLeave={handleOnMouseLeave}
      onMouseOver={handleOnMouseOver}
      width={activeWidth}
      close={close}
    >
      <Header
        setIsClosedByHeader={setIsClosedByHeader}
        setCloseMenu={setCloseMenu}
        width={activeWidth}
        content="Adminator"
        close={close}
      />
      <AntMenu mode="inline">
        {menuLinksGenerator(
          menuLinks,
          Link(AntMenu),
          SubLinksContainer(AntMenu),
        )}
      </AntMenu>
    </Wrapper>
  );
}

Menu.propTypes = {
  setIsClosedByHeader: PropTypes.func,
  setMenuIsHovered: PropTypes.func,
  menuIsHovered: PropTypes.bool,
  activeWidth: PropTypes.number,
  setCloseMenu: PropTypes.func,
  close: PropTypes.bool,
};

export default memo(Menu);
