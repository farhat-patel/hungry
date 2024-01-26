import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Favourites from "./components/Favourites";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
