import React, { useContext, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { RecipesContext } from "../context/RecipesContext";
import SortFilter from "../components/SortFilter";
import CheckboxFilter from '../components/CheckboxFilter'
const Home = () => {
  const allRecipes = useContext(RecipesContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleSearchResults = (recipes) => {
    setFilteredRecipes(recipes);
  };

  const handleSort = (sortOrder) => {
    const sortedRecipes = [...allRecipes]
        .filter(recipe => filteredRecipes.includes(recipe) || filteredRecipes.length === 0)
        .sort((a, b) => {
            return sortOrder === "highToLow" ? b.rating - a.rating : a.rating - b.rating;
        });
    setFilteredRecipes(sortedRecipes);
};

const handleServings = (selectServings) =>{
  if(selectServings){
    const servingsMorePeople = [...allRecipes].filter((s) => s.servings > 5);
    setFilteredRecipes(servingsMorePeople);
  }else{
    setFilteredRecipes(allRecipes)
  }

}

  return (
    <React.Fragment>
    <div className="filter-container">
        <SortFilter onSort={handleSort} />
        <CheckboxFilter onServings={handleServings} />
        <SearchBar onSearch={handleSearchResults} />
    </div>

      <RecipeCard
        recipes={filteredRecipes.length > 0 ? filteredRecipes : allRecipes}
      />
    </React.Fragment>
  );
};

export default Home;
