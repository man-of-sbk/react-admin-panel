import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

const Badge = ({ content, color, bgColor }) => {
  console.log(color, bgColor);

  return (
    <Wrapper color={color} bgColor={bgColor}>
      {content}
    </Wrapper>
  );
};

Badge.propTypes = {
  content: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export default Badge;
