import pokemon  from "./pokemon";
import Pokedex from "./Pokedex";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Pokedex</h1>
    <Pokedex pokemon={pokemon}/>
    </div>
  );
}

export default App;