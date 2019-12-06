import styled from 'styled-components';
import * as cssVars from 'cssVariables';

const Wrapper = styled.div`
  width: ${props => (props.close ? '65px' : `${props.width}px`)};
  position: relative;
  transition: 0.3s;
  overflow: hidden;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;


  @media (max-width: ${cssVars.sm}px) {
    width: ${props => (props.close ? '0' : `${props.width}px`)};
  }

  .ant-menu.ant-menu-root {
    overflow-x: hidden;
    padding-top: 30px;
    overflow-y: auto;
    height: 100vh;
    width: 100%;

    .ant-menu-item,
    .ant-menu-submenu-title {
      font-weight: 600;
      text-overflow: initial;

      .anticon {
        margin-right: 18px;
        vertical-align: 1px;
        font-size: 18px;
      }

      .link {
        display: ${props => (props.close ? 'none' : 'inline-block')};
      }
    }

    // .ant-menu-sub {
    //   height: ${props => props.close && '0'};
    // }
  }
`;

export default Wrapper;
