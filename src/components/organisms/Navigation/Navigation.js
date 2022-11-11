import { useContext } from 'react';
import { NavigationContext } from '../../../providers/NavigationProvider';
import { Wrapper } from './Navigation.styles';
import User from '../../atoms/User/User';
import NavItem from '../../atoms/NavItem/NavItem';
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
        <img src={require('../../../assets/avatar.png')} alt='admin' />
        <h2>Los Mlk</h2>
        <p>Your fav Admin</p>
      </User>
      <NavItem
        exact='true'
        to='/'
        isCollapsed={isCollapsed}
        icon={<DashboardOutlinedIcon />}
        name='Dashboard'
      />
      <NavItem
        exact='true'
        to='/team'
        isCollapsed={isCollapsed}
        icon={<PeopleOutlinedIcon />}
        name='Team'
      />
      <NavItem
        exact='true'
        to='/form'
        isCollapsed={isCollapsed}
        icon={<PersonAddAlt1OutlinedIcon />}
        name='Add member'
      />
      <NavItem
        exact='true'
        to='/bar'
        isCollapsed={isCollapsed}
        icon={<BarChartOutlinedIcon />}
        name='Bar chart'
      />
      <NavItem
        exact='true'
        to='/pie'
        isCollapsed={isCollapsed}
        icon={<PieChartOutlineOutlinedIcon />}
        name='Pie chart'
      />
    </Wrapper>
  );
}

export default Navigation;
