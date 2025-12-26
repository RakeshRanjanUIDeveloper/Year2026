import React, { useState } from 'react';

const SortFilter = ({ onSort }) => { 
    const [sortOrder, setSortOrder] = useState('');

    const handleSortChange = (e) => {
        const selectedSortOrder = e.target.value;
        setSortOrder(selectedSortOrder);
        onSort(selectedSortOrder); 
    };

    return (   
        <React.Fragment>
            <fieldset>
                <legend>Sort By</legend>
                <label>
                    <input
                        type="radio"
                        value="highToLow"
                        onChange={handleSortChange}
                        checked={sortOrder === 'highToLow'}
                    />
                    Price - High to Low
                </label>
                <label>
                    <input
                        type="radio"
                        value="lowToHigh"
                        onChange={handleSortChange}
                        checked={sortOrder === 'lowToHigh'}
                    />
                    Price - Low to High
                </label>
            </fieldset>
        </React.Fragment>
    );
};

export default SortFilter;
