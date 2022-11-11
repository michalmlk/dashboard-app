import styled from 'styled-components';

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }

  h2 {
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    margin: 20px 0 5px;
  }
  p {
    margin-top: 0;
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

function User({ children }) {
  return <StyledUser>{children}</StyledUser>;
}

export default User;
