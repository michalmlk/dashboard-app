import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  button {
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: #aaa;
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
`;

function Buttons({ children }) {
  return <ButtonsWrapper>{children}</ButtonsWrapper>;
}

export default Buttons;
