import { StyledLink } from './NavItem.styles';

function NavLink({ exact, to, isCollapsed, icon, name }) {
  return (
    <StyledLink exact={exact} to={to}>
      {icon}
      {!isCollapsed && <span>{name}</span>}
    </StyledLink>
  );
}

export default NavLink;
