import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.scss';

class Searchbar extends Component {
  state = {
    search: '',
  };
  handleChangeSearch = e => {
    this.setState({ search: e.currentTarget.value });
  };
  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.resetForm();
  };
  resetForm = () => this.setState({ search: '' });

  render() {
    const { search } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmitForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormIinput}
            type="text"
            name="search"
            value={search}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={this.handleChangeSearch}
          />
        </form>
      </header>
    );
  }
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Searchbar;
