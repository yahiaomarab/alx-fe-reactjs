import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/data.json"); // Ensure the correct path
        const result = await response.json();
        const selectedRecipe = result.find(
          (item) => item.id.toString() === recipeId
        );
        setRecipe(selectedRecipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [recipeId]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        className="mb-4 w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
        src={recipe.image}
        alt={recipe.title}
      />
      <h2 className="text-2xl text-green-600 font-semibold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
      <p className="text-gray-600">
        {recipe.description || "No description available."}
      </p>
      <p className="text-gray-600">
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </p>
      <p className="text-gray-600">
        <strong>Instructions:</strong> {recipe.instructions}
      </p>  
    </div>
  );
}

export default RecipeDetails;
