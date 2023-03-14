import styled, { css } from 'styled-components';
import { device } from './device';

interface errorProps {
  error?: string;
}

export const Input = styled.input<errorProps>`
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  background-color: transparent;
  color: ${({ theme }) => theme.color[50]};
  border-bottom: 1px solid ${({ theme }) => theme.color[200]};

  @media ${device.mobileS} {
    font-size: 12px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color[50]};
  }

  &[disabled] {
    cursor: not-allowed;
    border-bottom: 1px solid ${({ theme }) => theme.color[800]};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.color[1000]};
    border-bottom: 1px solid ${theme.color[1000]};
  `}
`;
