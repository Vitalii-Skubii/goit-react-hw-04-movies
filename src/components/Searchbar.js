import PropTypes from 'prop-types';
import { Component } from 'react';

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
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
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
