import "./App.css";
import Navbar from './components/Navbar'
import Home from './views/Home'
import PersonProfile from "./views/PersonProfile";
import PlanetProfile from "./views/PlanetProfile";

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Home />
      <PersonProfile />
      <PlanetProfile />
    </div>
  );
}

export default App;
