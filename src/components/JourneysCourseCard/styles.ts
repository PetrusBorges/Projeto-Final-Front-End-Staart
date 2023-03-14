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
    padding: 22px;
    border-radius: 8px;
    color: ${({ theme }) => theme.color[50]};
    background-color: ${({ theme }) => theme.color[800]};

    &:hover {
      transition: all 0.5s ease;
      background-color: ${({ theme }) => theme.color[700]};
    }

    > img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    h1 {
      font-size: 18px;
      margin-bottom: 12px;
    }

    p {
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 12px;
    }

    @media ${device.tablet} {
      width: 350px;
      padding: 18px;

      h1 {
        font-size: 13px;
      }

      p {
        font-size: 12px;
      }
    }

    @media ${device.mobileM} {
      width: 300px;
      padding: 16px;
    }

    @media ${device.mobileS} {
      width: 280px;
      padding: 14px;
    }
  }
`;

export const InfoCourse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const LevelCourse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 20px;
    height: 20px;
  }
`;
