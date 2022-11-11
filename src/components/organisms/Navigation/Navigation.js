import { StyledLink, Wrapper } from './Navigation.styles';
import User from '../../atoms/User/User';
import '../../../assets/avatar.png';
import {
  DashboardOutlinedIcon,
  PersonAddAlt1OutlinedIcon,
  BarChartOutlinedIcon,
  PieChartOutlineOutlinedIcon,
  PeopleOutlinedIcon,
} from '../../../assets/icons';

function Navigation() {
  return (
    <Wrapper>
      <User>
        <img src={require('../../../assets/avatar.png')} alt='ss' />
        <h2>Los Mlk</h2>
        <p>Your fav user</p>
      </User>
      <StyledLink exact='true' to='/'>
        <DashboardOutlinedIcon />
        Dashboard
      </StyledLink>
      <StyledLink to='/team'>
        <PeopleOutlinedIcon />
        Team
      </StyledLink>
      <StyledLink to='/form'>
        <PersonAddAlt1OutlinedIcon />
        Add member
      </StyledLink>
      <StyledLink to='/bar'>
        <BarChartOutlinedIcon />
        Barchart
      </StyledLink>
      <StyledLink to='/pie'>
        <PieChartOutlineOutlinedIcon />
        Piechart
      </StyledLink>
    </Wrapper>
  );
}

export default Navigation;
