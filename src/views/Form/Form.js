import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ViewWrapper } from '../../components/molecules/ViewWrapper.styles';
import { DashboardContext } from '../../providers/DashboardProvider';
import { useForm as useFormHook } from '../../hooks/useForm';
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
    useFormHook(initialFormState);
  const { register, handleSubmit, formState } = useForm();

  const handleAddSubmit = (e) => {
    e.preventDefault();
    addTeammateHandler(formValues);
    handleClearForm();
  };

  return (
    <ViewWrapper>
      <Header title='Add member' subtitle='Add new teammate' />
      <StyledForm onSubmit={handleAddSubmit}>
        <input
          {...register('firstName', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          type='text'
          name='name'
          value={formValues.name}
          onChange={handleInputChange}
          placeholder='Name'
        />
        <input
          {...register('age', { required: true, min: 18, max: 99 })}
          type='number'
          name='age'
          value={formValues.age}
          onChange={handleInputChange}
          placeholder='Age'
        />
        <input
          {...register('phone', {
            required: true,
            pattern: /[+][0-9]{2}[-s.][0-9]{3}[-s.][0-9]{3}[-s.][0-9]{3}$/,
          })}
          type='text'
          name='phone'
          value={formValues.phone}
          onChange={handleInputChange}
          placeholder='Phone number'
        />
        <input
          {...register('email')}
          type='text'
          name='email'
          value={formValues.email}
          onChange={handleInputChange}
          placeholder='Email'
        />
        <select
          {...register('access')}
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
