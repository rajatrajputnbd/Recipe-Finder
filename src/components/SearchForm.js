import React, { useState } from "react";
import axios from "axios";

function SearchForm({ setRecipes, setError }) {
    // State to hold the user-entered ingredients
	const [ingredients, setIngredients] = useState("");

    // Function to handle the form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.get(
				`https://api.edamam.com/search?q=${ingredients}&app_id=898f031e&app_key=4b93f88671acc9d338599d9078ace254`
			);
            // console.log(response);
			setRecipes(response.data.hits);     // Set the fetched recipes in the parent component's state
            setError(null);                     // Clear any previous error
		} catch (error) {
			console.error(error);
            setError(error);                    // Set the error in the parent component's state for display
		}
	};      

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<div className="input-group">
				<input type="text" className="form-control" placeholder="Enter ingredients (comma-separated)"
					value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
				<button type="submit" className="btn btn-primary">Search</button>
			</div>
		</form>
	);
};

export default SearchForm;

