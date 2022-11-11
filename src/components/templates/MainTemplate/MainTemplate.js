import { useContext } from 'react';
import styled from 'styled-components';
import { NavigationContext } from '../../../providers/NavigationProvider';
import Navigation from '../../organisms/Navigation/Navigation';
import Topbar from '../../organisms/Topbar/Topbar';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: ${({ isCollapsed }) =>
    isCollapsed ? '70px 1fr' : '250px 1fr'};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-y: hidden;
`;

function MainTemplate({ children }) {
  const { isCollapsed } = useContext(NavigationContext);
  return (
    <Wrapper isCollapsed={isCollapsed}>
      <Navigation />
      <Topbar />
      {children}
    </Wrapper>
  );
}
export default MainTemplate;
