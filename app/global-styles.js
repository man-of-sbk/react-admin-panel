import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // *** addition to libraries
  .anticon {
    vertical-align: 1px;
  }

  // *** custom
  .flat-ul {
    align-items: center;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    .flat-ul-li {
      cursor: pointer;
    }
  }

  .d-init {
    display: initial;
  }

  .d-none {
    display: none;
  }
`;

export default GlobalStyle;
