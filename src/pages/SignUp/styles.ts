import styled from 'styled-components';
import { device } from '../../components/device';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerSignUp = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.color[50]};
    border-bottom: 1px solid ${({ theme }) => theme.color[200]};
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: none;
    transition: all 0.5s ease;
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.color[600]};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.color[200]};
      color: ${({ theme }) => theme.color[200]};
    }

    @media ${device.mobileM} {
      text-align: center;
      font-size: 13px;
    }
  }
`;

export const ErrorButon = styled.small`
  margin-top: 18px;
  font-size: 16px;
  color: ${({ theme }) => theme.color[1000]};
`;
