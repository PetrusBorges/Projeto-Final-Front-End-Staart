import styled from 'styled-components';
import { device } from './device';
import arrowSelect from '../assets/images/arrowSelect.svg';

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
  background-image: url(${arrowSelect});
  background-repeat: no-repeat;
  background-position: 95%;

  > option {
    background-color: ${({ theme }) => theme.color[800]};
    color: ${({ theme }) => theme.color[50]};
    font-size: 16px;
  }

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
