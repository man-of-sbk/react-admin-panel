import styled from 'styled-components';

import Col from 'antd/lib/col';

import * as cssVars from 'cssVariables';

const Wrapper = styled(Col)`
  .ant-row {
    border: 1px solid ${cssVars.borderColor};
    height: 600px;
  }

  .map-container {
    border-right: 1px solid ${cssVars.blue1};
    background-color: white;
    padding: 20px;
    height: 100%;
  }

  .charts-container {
    padding: 20px;
    background-color: white;
  }
`;

export default Wrapper;
