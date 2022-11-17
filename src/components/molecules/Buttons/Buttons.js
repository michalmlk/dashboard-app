import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: #aaa;
  transition: all 0.2s;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  ${StyledLink}:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

export function Buttons({ children }) {
  return <ButtonsWrapper>{children}</ButtonsWrapper>;
}

export default Buttons;
