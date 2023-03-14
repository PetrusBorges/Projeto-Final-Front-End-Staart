import styled from 'styled-components';
import { device } from '../../components/device';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

  h2 {
    text-align: center;
    width: 100%;
    padding: 10px;
    color: ${({ theme }) => theme.color[50]};
    background-color: ${({ theme }) => theme.color[800]};
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const Form = styled.form`
  width: 350px;

  @media ${device.mobileM} {
    width: 260px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;
