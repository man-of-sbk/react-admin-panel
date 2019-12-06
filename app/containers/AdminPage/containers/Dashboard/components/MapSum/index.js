import React from 'react';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Progress from 'antd/lib/progress';

import { VectorMap } from 'react-jvectormap';

import { options } from './mapOptionsNdata';

import Wrapper from './Wrapper';

const MapSum = () => {
  return (
    <Wrapper sm={{ span: 24 }}>
      <Row>
        <Col className="map-container" xl={{ span: 16 }} xs={{ span: 24 }}>
          <VectorMap {...options} />
        </Col>
        <Col className="charts-container" xl={{ span: 8 }} xs={{ span: 24 }}>
          aa
        </Col>
      </Row>
    </Wrapper>
  );
};

export default MapSum;
