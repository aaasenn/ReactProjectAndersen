import React from "react";

const SearchBar = (props) => {
    return (
    <div>
        <label> Search film
        <input type="text"
        placeholder='Type...'
        onChange={ (e) => {
            props.setSearchValue(e.target.value)
        }}
        />
        </label>
    </div>
    )
}

export default SearchBar;

