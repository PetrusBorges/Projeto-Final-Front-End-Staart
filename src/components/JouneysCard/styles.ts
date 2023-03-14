import styled from 'styled-components';
import { device } from '../device';

export const Container = styled.div`
  a {
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 450px;
    height: 380px;
    padding: 22px;
    border-radius: 8px;
    color: ${({ theme }) => theme.color[50]};
    background-color: ${({ theme }) => theme.color[800]};

    &:hover {
      transition: all 0.5s ease;
      background-color: ${({ theme }) => theme.color[700]};
    }

    img {
      width: 90px;
      height: 90px;
      margin-bottom: 12px;
    }

    h1 {
      font-size: 18px;
      margin-bottom: 16px;
    }

    p {
      text-align: justify;
      font-size: 12px;
      margin-bottom: 12px;
    }

    strong {
      font-size: 18px;
    }

    @media ${device.tablet} {
      width: 350px;

      img {
        width: 60px;
        height: 60px;
      }
    }

    @media ${device.mobileM} {
      width: 300px;

      img {
        width: 40px;
        height: 40px;
      }
    }

    @media ${device.mobileS} {
      width: 280px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
