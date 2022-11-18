import styled from 'styled-components';

export const StyledTasksListItem = styled.div`
  height: 40vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.2s ease;

  & h2 {
    font-size: 24px;
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.primary};
    transition: text-shadow 0.2s ease;
    padding: 0 1.3rem;
  }

  & p {
    font-size: 16px;
    font-weight: lighter;
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0 1.3rem;
  }

  &:hover {
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);

    & h2 {
      text-shadow: 2px 2px 10px ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const TaskDescription = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.light};

    &:first-child {
      font-weight: bold;
    }
  }
`;
