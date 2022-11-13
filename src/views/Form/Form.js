import { useContext } from 'react';
import { ViewWrapper } from '../../components/molecules/ViewWrapper.styles';
import { DashboardContext } from '../../providers/DashboardProvider';
import { useForm } from '../../hooks/useForm';
import { StyledForm } from './Form.styles';
import Header from '../../components/molecules/Header/Header';

const initialFormState = {
  id: '',
  name: '',
  age: '',
  phone: '',
  email: '',
  access: '',
};

function Form() {
  const { addTeammateHandler } = useContext(DashboardContext);
  const { formValues, handleInputChange, handleClearForm } =
    useForm(initialFormState);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addTeammateHandler(formValues);
    handleClearForm();
  };

  return (
    <ViewWrapper>
      <Header title='Team' subtitle='Your Teammates' />
      <StyledForm onSubmit={handleAddSubmit}>
        <input
          type='text'
          name='name'
          value={formValues.name}
          onChange={handleInputChange}
          placeholder='Name'
        />
        <input
          type='text'
          name='age'
          value={formValues.age}
          onChange={handleInputChange}
          placeholder='Age'
        />
        <input
          type='text'
          name='phone'
          value={formValues.phone}
          onChange={handleInputChange}
          placeholder='Phone number'
        />
        <input
          type='text'
          name='email'
          value={formValues.email}
          onChange={handleInputChange}
          placeholder='Email'
        />
        <select
          name='access'
          id='access'
          value={formValues.access}
          onChange={handleInputChange}
        >
          <option value='' selected>
            Select access level
          </option>
          <option value='user' selected>
            User
          </option>
          <option value='manager'>Manager</option>
          <option value='admin'>Admin</option>
        </select>
        <button type='submit'>Add user</button>
      </StyledForm>
    </ViewWrapper>
  );
}
export default Form;
