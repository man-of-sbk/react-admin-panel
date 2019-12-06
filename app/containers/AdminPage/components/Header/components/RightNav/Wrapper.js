import styled from 'styled-components';

// import * as colors from 'cssVariables';

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  align-items: center;

  .ant-scroll-number.ant-badge-count {
    font-size: 10px;
    min-width: 16px;
    height: 16px;
    width: 16px;
    display: flex;
    align-items: center;
  }

  .anticon {
    font-size: 18px;
  }

  .flat-ul-li {
    margin-left: 20px;
  }
`;

export default Wrapper;
