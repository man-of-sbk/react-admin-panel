import React from 'react';
import PropTypes from 'prop-types';

import Chart from './components/Chart';
import Badge from './components/Badge';
import Wrapper from './Wrapper';

const TotalSum = ({
  chartHoverColor,
  summaryBgColor,
  chartBgColor,
  summaryColor,
  chartData,
  summary,
  title,
}) => {
  return (
    <Wrapper md={{ span: 6 }} xs={{ span: 24 }}>
      <section className="content">
        <h6>{title}</h6>
        <section className="sums">
          <Chart
            hoverColor={chartHoverColor}
            bgColor={chartBgColor}
            data={chartData}
          />
          <Badge
            bgColor={summaryBgColor}
            color={summaryColor}
            content={summary}
          />
        </section>
      </section>
    </Wrapper>
  );
};

TotalSum.propTypes = {
  chartHoverColor: PropTypes.string,
  summaryBgColor: PropTypes.string,
  chartBgColor: PropTypes.string,
  summaryColor: PropTypes.string,
  chartData: PropTypes.array,
  summary: PropTypes.string,
  title: PropTypes.string,
};

export default TotalSum;
