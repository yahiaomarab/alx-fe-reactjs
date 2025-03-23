import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetail";
import "./App.css";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      <Route path ="/add-recipe" element={<AddRecipeForm />}  />
    </Routes>
   </Router>
  );
}

export default App;

