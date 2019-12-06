import styled from 'styled-components';

import * as cssVars from 'cssVariables';

const Wrapper = styled.header`
  border-bottom-color: ${props =>
    props.close ? 'transparent' : cssVars.borderColor};
  border-bottom: 1px solid ${cssVars.borderColor};
  border-right: 1px solid ${cssVars.borderColor};
  background-color: white;

  .content {
    letter-spacing: 0.2px;
    align-items: center;
    padding: 0 20px;
    display: flex;
    width: 100%;
    width: ${props => props.width}px;
  }

  .left-section {
    flex: 1 1 auto;

    .header-link {
      align-items: center;
      display: flex;
      font-weight: 400;
      font-size: 20px;
      color: ${cssVars.grey1};

      img {
        height: 70px;
        width: auto;
        transition: 0.3s;
        margin-left: ${props => props.close && '-26px'};
      }
    }
  }

  .right-section {
    flex: 0 0 auto;
    cursor: pointer;

    .close-menu {
      color: ${cssVars.grey1};
      vertical-align: 1px;
      font-size: 18px;
      display: none;
      cursor: pointer;

      @media (max-width: ${cssVars.sm}px) {
        display: initial;
      }
    }
  }
`;

export default Wrapper;
