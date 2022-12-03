import styled from 'styled-components';

export const StyledSelect = styled.select`
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
`;

export const StyledInput = styled.input`
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
`;
