import React from 'react';
import PropTypes from 'prop-types';
import { Link as RRDlink } from 'react-router-dom';

import Icon from 'antd/lib/icon';

// *** since <Item/> is a sub component of <Menu/> component according to 'antd', these 2 components need to stay together => we need a HOC in order to connect
// ***** the <Menu/> component which will contain below <Item/> component
const Link = AntMenu => {
  // *** rest is <Item/>'s required props that only <Menu> has
  const Component = ({ icon, iconColor, content, to, ...rest }) => {
    return (
      <AntMenu.Item
        {...rest}
        // iconColor={iconColor}
      >
        {icon && <Icon type={icon} />}
        <RRDlink className="link" to={to}>
          {content}
        </RRDlink>
      </AntMenu.Item>
    );
  };

  Component.propTypes = {
    iconColor: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
  };

  return Component;
};

export default Link;
