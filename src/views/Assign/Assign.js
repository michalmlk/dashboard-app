import { useState, useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { StyledForm } from '../Form/Form.styles';
import Header from '../../components/molecules/Header/Header';
import { ViewWrapper } from '../../components/molecules/ViewWrapper.styles';
import {
  StyledInput,
  StyledSelect,
} from '../../components/atoms/Inputs/Inputs.styles';
import { DashboardContext } from '../../providers/DashboardProvider';

function Assign() {
  const { users } = useContext(DashboardContext);
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [userTask, setUserTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedUser = users.find((user) => user.name === currentUser.name);
    selectedUser.tasks.push({
      title: userTask,
      completed: false,
      key: uuidV4(),
    });
  };

  const handleInputChange = (e) => {
    setUserTask(e.target.value);
  };

  const handleSetCurrentUser = (e) => {
    setCurrentUser(users.find((user) => user.name === e.target.value));
  };

  return (
    <ViewWrapper>
      <Header title='Assign' subtitle='Assign task' />
      <h1>Choose Teammate</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSelect name='user' id='user' onChange={handleSetCurrentUser}>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            );
          })}
        </StyledSelect>
        <StyledInput type='text' onChange={handleInputChange} />
        <button type='submit'>Assign</button>
      </StyledForm>
    </ViewWrapper>
  );
}
export default Assign;
