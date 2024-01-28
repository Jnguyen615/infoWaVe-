import './SearchBar.scss';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, setSearchTerm, searchTerm }) => {
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="nav-bar">
      <div className="search">
        <input
          type="text"
          id="search"
          placeholder="Search by keyword ..."
          className="search-input"
          value={searchTerm}
          onChange={event => handleSearchChange(event)}
        />
      </div>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
