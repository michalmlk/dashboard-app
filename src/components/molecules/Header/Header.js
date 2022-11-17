import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;
    font-weight: lighter;
  }
  h4 {
    margin-top: 10px;
    font-size: 22px;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

function Header({ title, subtitle, children }) {
  return (
    <HeaderWrapper>
      <div>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
      {children}
    </HeaderWrapper>
  );
}

export default Header;
