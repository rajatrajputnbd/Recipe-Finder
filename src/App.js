import "./App.css";
import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import RecipeList from "./components/RecipeList";

function App() {
	// State to store the fetched recipes
	const [recipes, setRecipes] = useState([]);

	// State to handle errors
	const [error, setError] = useState(null);

	return (
		<div className="container mt-3">
			<h1 className="mb-4">Recipe Finder</h1>

			{/* SearchForm component to fetch recipes */}
			<SearchForm setRecipes={setRecipes} setError={setError} />

			{/* Display error message if an error occurs */}
			{error ? (
				<p className="alert alert-danger mt-2">
					An error occurred: {error.message}
        		</p>
      		) : recipes.length > 0 ? (
				// Display the list of recipes if available
        		<RecipeList recipes={recipes} />
      		) : (
				// Display a message if no recipes are found
				<p className="alert alert-dark mt-2">
					Please enter ingredients and click "Search" to find recipes.
				</p>
      		)}
			
		</div>
	);
}

export default App;
