import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 14px;
    font-family: Roboto, sans-serif;
  }
  #root{
    height: 100%;
    display: flex;

    section {
      width: 70%;
    }

  }
  button {
    cursor: pointer;
  }
`;
