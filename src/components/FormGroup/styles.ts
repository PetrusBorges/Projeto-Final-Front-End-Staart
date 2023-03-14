import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    display: block;
    margin-top: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.color[1000]}
  }
`;
