import styled from 'styled-components';

export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 60px;
`;
