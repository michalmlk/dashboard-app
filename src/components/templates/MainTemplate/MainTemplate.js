import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
`;

function MainTemplate({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
export default MainTemplate;
