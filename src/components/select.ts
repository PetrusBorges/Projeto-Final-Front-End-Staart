import styled from 'styled-components';
import { device } from './device';

export const Select = styled.select`
  cursor: pointer;
  width: 300px;
  height: 52px;
  border: none;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  appearance: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color[200]};
  border-bottom: 1px solid ${({ theme }) => theme.color[200]};

  @media ${device.mobileM} {
    width: 250px;
    font-size: 12px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color[50]};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.color[500]};
  }

  &[disabled] {
    cursor: not-allowed;
    border-bottom: 1px solid ${({ theme }) => theme.color[800]};
  }
`;
