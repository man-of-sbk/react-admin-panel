import styled from 'styled-components';

import * as cssVars from 'cssVariables';

const PagesWrapper = styled.section`
  padding-top: calc(69px + 20px);
  padding-right: 20px;
  padding-left: 20px;
  transition: 0.3s;

  @media (min-width: ${cssVars.sm}px) {
    padding-left: calc(
      ${props => (!props.menuIsClose ? `20px + 256px` : `65px + 20px`)}
    );
  }
`;

export default PagesWrapper;
