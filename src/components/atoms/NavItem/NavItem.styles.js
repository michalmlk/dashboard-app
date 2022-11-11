import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeclassname = 'active';
export const StyledLink = styled(NavLink).attrs({
  activeclassname,
})`
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

  span {
    transition: all 0.2s;
  }
`;
