import styled from 'styled-components';

// import * as colors from 'cssVariables';

const Wrapper = styled.section`
  flex: 1 1;

  .flat-ul {
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;

    .flat-ul-li {
      margin-right: 20px;

      .side-bar-toggle {
        font-weight: 600;
        font-size: 16px;
      }

      .search-bar-toggle {
        font-size: 20px;
      }
    }
  }
`;

export default Wrapper;
