import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { StyledTasksListItem, TaskDescription } from './TaskListItem.styles';

export const TaskItem = styled.div``;

function TasksListItem({ user }) {
  return (
    <StyledTasksListItem>
      <h2>{user.name}</h2>
      <p>Tasks</p>
      <Scrollbars>
        {user.tasks.map(({ title, completed, key }) => (
          <TaskDescription key={key}>
            <p>{title}</p>
            <p>completed: {completed ? 'yes' : 'no'}</p>
          </TaskDescription>
        ))}
      </Scrollbars>
    </StyledTasksListItem>
  );
}
export default TasksListItem;
