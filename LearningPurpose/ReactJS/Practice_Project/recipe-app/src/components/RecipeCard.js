import React, {useEffect } from "react";

const RecipeCard = ({recipes}) => {
   useEffect(() => {
        if (recipes.length > 0) {
            console.log(recipes);
        }
    }, [recipes]);

    return (
        <React.Fragment>
            <div className="recipe-cards">
                {recipes.map((recipe) => (
                    <div className="recipe" key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} />
                        <h2>{recipe.name}</h2>
                        <h2>{recipe.mealType}</h2>
                        <div className="recipe-tags">{recipe.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                        <p>{recipe.rating}</p>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default RecipeCard;

