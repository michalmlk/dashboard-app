import styled from 'styled-components';
import Navigation from '../../organisms/Navigation/Navigation';
import Topbar from '../../organisms/Topbar/Topbar';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 250px 1fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-y: hidden;
`;

function MainTemplate({ children }) {
  return (
    <Wrapper>
      <Navigation />
      <Topbar />
      {children}
    </Wrapper>
  );
}
export default MainTemplate;
