import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const activeclassname = 'active';
export const StyledLink = styled(NavLink).attrs({ activeclassname })`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  text-align: left;
  margin: 15px auto 15px 20px;
  position: relative;
  font-size: ${({ iscollapsed }) => (!iscollapsed ? '16px' : '0')};
  gap: 0.5rem;
  transition: 0.2s ease;

  &.${activeclassname} {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
