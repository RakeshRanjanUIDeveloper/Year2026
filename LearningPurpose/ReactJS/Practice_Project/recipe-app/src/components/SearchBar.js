import React, { useContext, useState } from 'react'
import { RecipesContext } from '../context/RecipesContext'

const SearchBar = ({onSearch}) => {
    const recipes = useContext(RecipesContext);
    const [searchText, setSearchText] = useState('');

    const handleSearch = () =>{
        const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchText.toLowerCase()));
        onSearch(filteredRecipes)
    }
  return (
    <React.Fragment>
        <div className='search-bar'>
            <label htmlFor='search-input'>Search:</label>
            <input type='text' placeholder='search by name...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={handleSearch}>Search Data</button>
        </div>
    </React.Fragment>
  )
}

export default SearchBar