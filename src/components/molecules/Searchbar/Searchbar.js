import styled from 'styled-components';
import { SearchOutlinedIcon } from '../../../assets/icons';

const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    background: rgba(41, 61, 82, 1);
    border: 1px solid #ddd;
    color: #aaaa;
    height: 40px;
    width: 250px;
    border-radius: 5px;
    padding-left: 15px;
    font-size: 18px;
    border: none;
    outline: none;
    transition: all 0.2 ease;

    &:focus {
      &::placeholder {
        transition: all 0.2s;
        opacity: 0;
      }
    }
  }

  button {
    background-color: transparent;
    height: 40px;
    border: none;
    font-size: 18px;
    color: #aaa;
    transition: color 0.1s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

function Searchbar() {
  return (
    <SearchbarWrapper>
      <input type='text' placeholder='Search' />
      <button type='button'>
        <SearchOutlinedIcon />
      </button>
    </SearchbarWrapper>
  );
}

export default Searchbar;
