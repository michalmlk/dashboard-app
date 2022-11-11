import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  grid-row: 2 / 2;
  grid-column: 2 / 2;
  background-color: ${({ theme }) => theme.colors.background};
`;
