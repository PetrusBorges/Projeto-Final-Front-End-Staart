import styled from 'styled-components';
import { device } from '../device';

export const Container = styled.div`
  width: 700px;
  height: 100vh;
  padding: 0 16px;
  background: linear-gradient(225deg, rgba(145, 107, 227, 0.4) 0%, rgba(97, 204, 227, 0.4) 100%);
  box-shadow: 0px 72px 104px rgba(52, 195, 227, 0.09), 0px 21.7059px 31.353px rgba(52, 195, 227, 0.058643), 0px 9.01552px 13.0224px rgba(52, 195, 227, 0.045), 0px 3.26074px 4.70995px rgba(52, 195, 227, 0.031357);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media ${device.tablet} {
    display: none;
  }

  > small {
    color: ${({ theme }) => theme.color[50]};
    font-size: 28px;
    font-weight: lighter;

    > strong {
      background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  > h1 {
    font-weight: lighter;
    background: linear-gradient(225deg, #916BE3 0%, #61CCE3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  > p {
    width: 400px;
    font-weight: lighter;
    color: ${({ theme }) => theme.color[50]};
  }
`;

