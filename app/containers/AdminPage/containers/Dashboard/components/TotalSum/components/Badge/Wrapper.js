import React from 'react';
import styled from 'styled-components';

import Tag from 'antd/lib/tag';

const Wrapper = styled(({ bgColor, ...rest }) => <Tag {...rest} />)`
  border-radius: 50px;
  align-items: center;
  font-weight: 600;
  padding: 0 14px;
  font-size: 14px;
  display: flex;
  border: 0;
  background-color: ${props => props.bgColor}!important;
  color: ${props => props.color};
`;

export default Wrapper;
