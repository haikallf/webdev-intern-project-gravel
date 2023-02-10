import "./App.css";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:pokemonId" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
