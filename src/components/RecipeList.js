import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import "./RecipeList.css";

function RecipeList({ recipes }) {
    // State for managing current page
	const [currentPage, setCurrentPage] = useState(1);
	const recipesPerPage = 4;

    // Calculate the index of the last recipe in the current page
	const indexOfLastRecipe = currentPage * recipesPerPage;
	
    // Calculate the index of the first recipe in the current page
	const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
	
    // Get the recipes to display in the current page
	const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // State for managing the index of the selected recipe
	const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(-1);

    // Function to handle pagination button click
	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

    // Calculate the total number of pages
    const totalPages = Math.ceil(recipes.length / recipesPerPage);
    // Create an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

	return (
		<div>
			{currentRecipes.map((recipe, index) => (
				<div key={index} className="card mb-3">
					<div className="row">
						<div className="col-md-8">
							<div className="card-body">
                            {/* Display recipe title */}
								<h3 className="card-title">{recipe.recipe.label}</h3>
								{recipe.recipe.ingredients && recipe.recipe.ingredients.length > 0 ? (
									<div className="ingredients-list">
										<ul className="list-group">
                                        {/* Display list of ingredients */}
											{recipe.recipe.ingredients.map((ingredient, index) => (
												<li key={index} className="list-group-item">
													<span style={{ marginRight: "5px" }}>•</span>
													{ingredient.text}
												</li>
											))}
										</ul>
									</div>
								) : (
									<p className="card-text">No ingredients found for this recipe.</p>
								)}
                                {/* Button to view recipe details */}
								<button type="button" className="btn btn-primary" style={{ marginTop: "10px" }}
									onClick={() => setSelectedRecipeIndex(index)}>View Details</button>
                                {/* Display recipe details when selected */}
								{selectedRecipeIndex === index && (
									<RecipeDetails recipe={recipe.recipe} />
								)}
							</div>
						</div>
						<div className="col-md-4 d-flex align-items-center justify-content-center">
                            {/* Display recipe image */}
							<img src={recipe.recipe.image} alt={recipe.recipe.label} className="recipe-image"/>
						</div>
					</div>
				</div>
			))}

            {/* Pagination */}
			<ul className="pagination">
				{pageNumbers.map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`} >
                        <button onClick={() => paginate(index + 1)} className="page-link">{index + 1}</button>
                    </li>
				))}
			</ul>
		</div>
	);
};

export default RecipeList;
