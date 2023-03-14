import styled from 'styled-components';
import { device } from '../device';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 152px;
  background-color: ${({ theme }) => theme.color[800]};
  border-top: 1px solid ${({ theme }) => theme.color[50]};

  @media ${device.tablet} {
    height: 250px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptopL} {
    padding: 0 24px;
  }

  @media ${device.tablet} {
    gap: 20px;
    flex-direction: column;
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color[50]};
  }
`;

export const LinkSocials = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    img {
      width: 26px;
      height: 26px;
    }
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  > p {
    color: ${({ theme }) => theme.color[50]};
  }
`;

export const ButtonFooterStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
