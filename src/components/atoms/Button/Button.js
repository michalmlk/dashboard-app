import styled from 'styled-components';

const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.buttons};
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #5187ed;
    cursor: pointer;
  }
`;

function Button({ onClick, text }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}
export default Button;
