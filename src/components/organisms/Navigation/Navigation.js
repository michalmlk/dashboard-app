import { useContext } from 'react';
import { NavigationContext } from '../../../providers/NavigationProvider';
import { StyledLink, Wrapper } from './Navigation.styles';
import User from '../../atoms/User/User';
import '../../../assets/avatar.png';
import {
  DashboardOutlinedIcon,
  PersonAddAlt1OutlinedIcon,
  BarChartOutlinedIcon,
  PieChartOutlineOutlinedIcon,
  PeopleOutlinedIcon,
  MenuOutlinedIcon,
  CloseOutlinedIcon,
} from '../../../assets/icons';

function Navigation() {
  const { isCollapsed, collapsedHandler } = useContext(NavigationContext);
  return (
    <Wrapper isCollapsed={isCollapsed}>
      <button type='button' onClick={collapsedHandler}>
        {isCollapsed ? <MenuOutlinedIcon /> : <CloseOutlinedIcon />}
      </button>
      <User isCollapsed={isCollapsed}>
        <img src={require('../../../assets/avatar.png')} alt='ss' />
        <h2>Los Mlk</h2>
        <p>Your fav user</p>
      </User>
      <StyledLink exact='true' to='/' iscollapsed={isCollapsed}>
        <DashboardOutlinedIcon />
        Dashboard
      </StyledLink>
      <StyledLink to='/team' iscollapsed={isCollapsed}>
        <PeopleOutlinedIcon />
        Team
      </StyledLink>
      <StyledLink to='/form' iscollapsed={isCollapsed}>
        <PersonAddAlt1OutlinedIcon />
        Add member
      </StyledLink>
      <StyledLink to='/bar' iscollapsed={isCollapsed}>
        <BarChartOutlinedIcon />
        Barchart
      </StyledLink>
      <StyledLink to='/pie' iscollapsed={isCollapsed}>
        <PieChartOutlineOutlinedIcon />
        Piechart
      </StyledLink>
    </Wrapper>
  );
}

export default Navigation;
