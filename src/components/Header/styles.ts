import styled from 'styled-components';
import { device } from '../device';

interface ArrowProps {
  menuOptions: boolean
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;

  @media ${device.mobileM} {
    height: 118px;
  }
`;

export const Content = styled.div<ArrowProps>`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptopL} {
    padding: 0 24px;
  }

  @media ${device.mobileM} {
    gap: 20px;
    flex-direction: column;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    > span {
      color: ${({ theme }) => theme.color[50]};
      font-size: 20px;

      > strong {
        font-size: 20px;
        background: linear-gradient(247.7deg, #AF97E1 20.62%, #4BBFEF 83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    font-weight: bold;
    color: ${({ theme }) => theme.color[50]};

    img {
      transition: transform 0.2s ease;
      transform: ${({ menuOptions }) => menuOptions ? 'rotate(180deg)' : 'rotate(0deg)'}
    }
  }
`;

export const DropdownMenu = styled.div`
  z-index: 999;
  width: 180px;
  background-color: ${({ theme }) => theme.color[800]};
  padding: 18px;
  list-style: none;
  position: absolute;
  top: 55px;
  right: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: showMenu 0.4s;

  opacity: 1;
  pointer-events: all;

  button {
    line-height: 0;
    background-color: transparent;
    border: none;
  }

  @media ${device.laptopL} {
    top: 55px;
    right: 14px;
  }

  @media ${device.mobileM} {
    top: 118px;
    right: 80px;
  }
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color[50]};
    width: 100px;

    &:hover {
      transition: all 0.5s ease;
      color: ${({ theme }) => theme.color[500]};
    }
  }
`;

export const DropdownItemList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  margin-top: 18px;

  button {
    width: 100%;
  }
`;
