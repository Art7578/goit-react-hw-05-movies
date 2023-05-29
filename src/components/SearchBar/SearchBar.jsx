import css from './SearchBar.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleQuerySearch = event => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (searchQuery.trim() === '') {
            alert('Enter the film title');
        }

        onSearch(searchQuery);
        setSearchQuery('');
    };

    return (
        <>
        <form onSubmit={handleSubmit} className={css.form}>
            <input
            type="text"
            name="serachQuery"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            onChange={handleQuerySearch}
            className={css.input}
            />
            <button 
            type="submit"
            className={css.button}
            >
                Search
            </button>
        </form>
        </>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;