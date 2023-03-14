import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.color[50]};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    text-decoration: none;
    background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    border-bottom: 1px solid ${({ theme }) => theme.color[600]};
  }
`;
