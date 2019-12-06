import styled from 'styled-components';

import Col from 'antd/lib/col';

import * as cssVars from 'cssVariables';

const Wrapper = styled(Col)`
  text-overflow: ellipsis;
  margin-bottom: 20px;
  overflow: hidden;

  .content {
    border: 1px solid ${cssVars.borderColor};
    background-color: white;
    border-radius: 2px;
    padding: 16px 20px;
  }

  h6 {
    color: ${cssVars.textColor};
    margin-bottom: 12px;
    font-size: 14px;
  }

  .sums {
    display: flex;
    justify-content: space-between;
  }
`;

export default Wrapper;
