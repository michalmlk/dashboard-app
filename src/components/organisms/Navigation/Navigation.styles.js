import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: ${({ isCollapsed }) => (isCollapsed ? '70px' : '100%')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${({ isCollapsed }) => (isCollapsed ? '50px 0' : '30px 0')};
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-color: ${({ theme }) => theme.colors.dark};
  position: relative;

  button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 10px;
    right: ${({ isCollapsed }) => (isCollapsed ? '25%' : '10px')};
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.buttons};
    transition: 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
