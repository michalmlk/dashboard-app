import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { v4 as uuidV4 } from 'uuid';
import { mockDataTeam } from '../../data/mockData';
import TasksListItem from '../../components/molecules/TasksListItem/TaskListItem';

const TasksList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 2rem;
`;

function Tasks() {
  return (
    <Scrollbars>
      <TasksList>
        {mockDataTeam.map((user) => {
          return <TasksListItem user={user} key={uuidV4()} />;
        })}
      </TasksList>
    </Scrollbars>
  );
}
export default Tasks;
