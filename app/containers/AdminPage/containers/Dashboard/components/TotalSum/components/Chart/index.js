/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Bar, Cell, Tooltip } from 'recharts';

import Wrapper from './Wrapper';

const Chart = ({ data, bgColor, hoverColor }) => {
  const [hoverCellIndex, setHoverCellIndex] = useState(-1);

  const handleOnMouseOver = (e, index) => {
    if (hoverCellIndex === index) return;

    setHoverCellIndex(index);
  };

  const handleOnMouseLeave = () => {
    if (hoverCellIndex === -1) return;

    setHoverCellIndex(-1);
  };

  return (
    <Wrapper width={48} height={30} data={data}>
      <Bar
        onMouseLeave={handleOnMouseLeave}
        onMouseOver={handleOnMouseOver}
        dataKey="result"
      >
        {data.map((ele, index) => (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <Cell
            fill={hoverCellIndex === index ? hoverColor : bgColor}
            cursor="pointer"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
      </Bar>
      {/* <Tooltip /> */}
    </Wrapper>
  );
};

Chart.propTypes = {
  hoverColor: PropTypes.string,
  bgColor: PropTypes.string,
  data: PropTypes.array,
};

export default Chart;
