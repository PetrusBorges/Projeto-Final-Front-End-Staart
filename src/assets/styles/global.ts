import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Saira', sans-serif;
  }

  body {
    font-size: 16px;
    background-color: ${({ theme }) => theme.color[900]};
  }

  button {
    cursor: pointer;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color[50]};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color[700]};
    border-radius: 20px;
  }
`;
