import React from 'react';
// import PropTypes from 'prop-types';

import Icon from 'antd/lib/icon';
import Badge from 'antd/lib/badge';

import UserAvatar from './components/UserAvatar';
import Wrapper from './Wrapper';

const RightNav = () => {
  return (
    <Wrapper className="right-nav">
      <ul className="flat-ul">
        <li className="flat-ul-li">
          <Badge>
            <Icon type="bell" />
          </Badge>
        </li>
        <li className="flat-ul-li">
          <Badge count={5}>
            <Icon type="mail" />
          </Badge>
        </li>
        <UserAvatar />
      </ul>
    </Wrapper>
  );
};

RightNav.propTypes = {};

export default RightNav;
