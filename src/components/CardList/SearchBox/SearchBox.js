import React from 'react';
import './SearchBox.css'
const SearchBox = () => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba" 
                type='search' 
                placeholder='search pokemon' 
                
            />
        </div>
    );
};

export default SearchBox;


