import React from 'react';
import './SearchBox.css'
const SearchBox = ({handleInput}) => {
    return (
        <div className="pa2">
            <input onChange={handleInput}
                className="pa3 ba" 
                type='search' 
                placeholder='search pokemon' 
                
            />
        </div>
    );
};

export default SearchBox;


