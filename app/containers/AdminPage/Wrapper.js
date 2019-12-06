import styled from 'styled-components';

import * as cssVars from 'cssVariables';

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;

  .body {
    flex: 1 1;
    background-color: ${cssVars.adminBodyColor};
  }
`;

export default Wrapper;
