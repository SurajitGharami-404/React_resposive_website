import React from 'react';
import "../Styles/Searchbar.css";

const SearchBar = ({placeholder}) => {
  return (
    <div className='d-flex search-bar'>
        <span className=' d-flex align-items-center search-bar__icon'><i className="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" placeholder={placeholder} className="ps-3 search-bar__input"/ >
    </div>
  )
}

export default SearchBar