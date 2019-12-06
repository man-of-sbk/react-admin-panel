import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';

// *** since <Item/> is a sub component of <Menu/> component according to 'antd', these 2 components need to stay together => we need a HOC in order to connect
// ***** the <Menu/> component which will contain below <Item/> component
const SubLinksContainer = AntMenu => {
  const Component = ({
    children,
    icon,
    iconColor,
    content,
    // *** just to prevent this props from being rendered to the DOM. Like when we deal with styled-component
    // eslint-disable-next-line react/prop-types
    subLinks,
    // *** rest is <Item/>'s required props that only <Menu> has
    ...rest
  }) => {
    return (
      <AntMenu.SubMenu
        {...rest}
        // iconColor={iconColor}
        title={
          <span>
            {icon && <Icon type={icon} />}
            <span className="link">{content}</span>
          </span>
        }
      >
        {children}
      </AntMenu.SubMenu>
    );
  };

  Component.propTypes = {
    iconColor: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.node,
  };

  return Component;
};

export default SubLinksContainer;
