import React from "react";

function RecipeDetails({ recipe }) {
	return (
		<div className="card mt-4">
			<div className="card-body">
				{/* Display recipe title */}
				<h3 className="card-title">{recipe.label}</h3>
                
				<p className="card-text">Cooking Time: {recipe.totalTime}</p>
				<p className="card-text">Instructions: {recipe.url}</p>
				<p className="card-text">Calories: {recipe.calories}</p>
			</div>
		</div>
	);
}

export default RecipeDetails;
