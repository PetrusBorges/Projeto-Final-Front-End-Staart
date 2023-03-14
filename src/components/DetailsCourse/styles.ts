import styled from 'styled-components';
import { device } from '../device';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  padding: 0 24px;

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const CardInfo = styled.div`
  width: 500px;
  text-align: left;
  font-size: 18px;
  color: ${({ theme }) => theme.color[50]};

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
  }

  @media ${device.mobileM} {
    font-size: 12px;
  }
`;
