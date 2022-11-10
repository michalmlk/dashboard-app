import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { CloseOutlinedIcon, MenuOutlinedIcon } from '../../../assets/icons';
import { SidebarWrapper } from './Sidebar.styles';

function Layout() {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <SidebarWrapper>
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to='/documentation' />}>
            Documentation
          </MenuItem>
          <MenuItem routerLink={<Link to='/calendar' />}> Calendar</MenuItem>
          <MenuItem routerLink={<Link to='/e-commerce' />}>E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button type='button' onClick={() => collapseSidebar()}>
          {collapsed ? (
            <MenuOutlinedIcon fontSize='large' />
          ) : (
            <CloseOutlinedIcon fontSize='large' />
          )}
        </button>
      </main>
    </SidebarWrapper>
  );
}

export default Layout;
