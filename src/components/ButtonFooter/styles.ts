import styled from 'styled-components';

export const Container = styled.a`
text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background-color: ${({ theme }) => theme.color[50]};
  border-radius: 48px;
  width: 150px;

  &:hover {
    transition: all .5s ease;
    color: ${({ theme }) => theme.color[500]};
  }

  img {
    width: 26px;
    height: 26px;
  }
`;

export const ButtonInfo = styled.div``;
