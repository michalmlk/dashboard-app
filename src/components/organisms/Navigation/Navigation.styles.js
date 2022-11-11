import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-color: ${({ theme }) => theme.colors.dark};
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
  font-size: 16px;
  gap: 0.5rem;
  transition: 0.2s ease;

  &.${activeclassname} {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
