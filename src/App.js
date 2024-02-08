import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Header from "./components/Header";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Body from "./components/Body";
//import Recipe from "./components/Recipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        {/* <Route path="/recipe/:recipeId" element={<Recipe />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
