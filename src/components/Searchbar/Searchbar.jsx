import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { Component } from 'react';
import { SearchbarStyled, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

export class Searchbar extends Component {
    static defaultProps = {
    searchPhoto: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    this.props.onSubmit({ query });
    e.target.reset();
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit"><FiSearch/>
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}
