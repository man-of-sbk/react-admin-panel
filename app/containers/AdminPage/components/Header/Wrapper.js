import styled from 'styled-components';

import * as cssVars from 'cssVariables';

const Wrapper = styled.header`
  border-bottom: 1px solid ${cssVars.borderColor};
  justify-content: space-between;
  align-items: center;
  background: white;
  transition: 0.3s;
  padding: 0 30px;
  display: flex;
  height: 69px;

  position: fixed;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;

  @media (min-width: ${cssVars.sm}px) {
    padding-left: calc(
      ${props => (!props.menuIsClose ? `30px + 256px` : `30px + 65px`)}
    );
  }
`;

export default Wrapper;
