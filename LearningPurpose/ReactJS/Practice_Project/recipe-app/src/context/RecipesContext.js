import { createContext, useEffect, useState } from "react";

//step 1 - create context
export const RecipesContext = createContext();

//step 2 - create Provider
export const RecipesProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        const fetchRecipesData = async() =>{
            try {
                const response = await fetch('https://dummyjson.com/recipes');
                const data = await response.json();
                const recipesData = data.recipes;
                setRecipes(recipesData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRecipesData();
    },[])
    return (
        <RecipesContext.Provider value={recipes}>
            {children}
        </RecipesContext.Provider>
    )
}