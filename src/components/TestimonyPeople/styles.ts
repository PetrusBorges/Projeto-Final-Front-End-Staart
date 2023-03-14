import styled from 'styled-components';
import { device } from '../device';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media ${device.mobileL} {
    padding: 0 24px;
  }
`;

export const TestimonyInfo = styled.div`
  img {
    width: 86px;
    height: 86px;
    border-radius: 48px;
    border: 3px solid ${({ theme }) => theme.color[200]};
  }

  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border-radius: 24px;
  color: ${({ theme }) => theme.color[50]};
  padding: 16px;
  background: linear-gradient(219.14deg, rgba(20, 29, 51, 0.4) -1.5%, rgba(4, 8, 18, 0.4) 102.36%);
  border: 2px solid rgba(46, 102, 201, 0.3);
  backdrop-filter: blur(8px);
  border-radius: 18px;

  small {
    border-bottom: 1px solid ${({ theme }) => theme.color[600]};
  }

  p {
    padding-top: 8px;
  }

  @media ${device.mobileL} {
    p {
      font-size: 14px;
    }
  }

  @media ${device.mobileM} {
    p {
      font-size: 12px;
    }
  }
`;
