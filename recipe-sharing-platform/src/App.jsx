import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetail";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
   </Router>
  );
}

export default App;

