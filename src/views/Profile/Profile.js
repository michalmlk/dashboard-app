import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ViewWrapper } from '../../components/molecules/ViewWrapper.styles';
import { DashboardContext } from '../../providers/DashboardProvider';
import { useForm as useFormHook } from '../../hooks/useForm';
import { StyledForm } from '../Form/Form.styles';
import Header from '../../components/molecules/Header/Header';
import { mockAdminData } from '../../data/mockAdminData';

function Profile() {
  const { formValues, handleInputChange } = useFormHook(mockAdminData);
  const [isEdited, setIsEdited] = useState(false);
  const { editAdminDataHandler } = useContext(DashboardContext);
  const setIsEditedHandler = (e) => {
    e.preventDefault();
    setIsEdited((prevState) => !prevState);
  };

  const handleEditAdminData = (e) => {
    e.preventDefault();
    editAdminDataHandler(formValues);
    setIsEdited((prevState) => !prevState);
  };

  return (
    <ViewWrapper>
      <Header title='Profile' subtitle='Edit profile' />
      <StyledForm onSubmit={handleEditAdminData}>
        <input
          type='text'
          value={formValues.name}
          name='name'
          disabled={!isEdited}
          onChange={handleInputChange}
        />
        <input
          type='text'
          value={formValues.desc}
          name='desc'
          disabled={!isEdited}
          onChange={handleInputChange}
        />
        <input
          type='text'
          value={formValues.age}
          name='age'
          disabled={!isEdited}
          onChange={handleInputChange}
        />
        <input
          type='text'
          value={formValues.rank}
          name='rank'
          disabled={!isEdited}
          onChange={handleInputChange}
        />
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}
        >
          <button type='submit'>Save</button>
          <button type='submit' onClick={setIsEditedHandler}>
            {isEdited ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </StyledForm>
    </ViewWrapper>
  );
}

export default Profile;
