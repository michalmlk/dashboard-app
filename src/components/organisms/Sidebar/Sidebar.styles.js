import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  left: 0;
  background-color: transparent;

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.buttons};
  }
`;
