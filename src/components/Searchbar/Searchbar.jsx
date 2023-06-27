import { useState } from 'react';

import PropTypes from 'prop-types';

import { ReactComponent as MyIcon } from '../search.svg';
import {
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmitHandler }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      alert('HEY!?! WHAT ARE YOU DOING???');
      return;
    }
    onSubmitHandler(searchValue);
    setSearchValue('');
  };

  const onChange = event => {
    const inputText = event.target.value.trim();
    return setSearchValue(inputText);
  };

  return (
    <SearchBarStyled>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            <MyIcon />
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={searchValue}
        />
      </SearchForm>
    </SearchBarStyled>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
