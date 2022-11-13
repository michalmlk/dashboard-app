import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
  gap: 1rem;
  align-self: center;
  position: absolute;
  bottom: 40%;
  transform: translateY(50%);

  input,
  select {
    height: 40px;
    font-size: 16px;
    padding-left: 10px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.lightGrey};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};

    &:focus {
      outline: none;
    }
  }
  button {
    width: 150px;
    height: 40px;
    font-size: 18px;
    align-self: flex-end;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.lightGrey};
    transition: 0.1s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
