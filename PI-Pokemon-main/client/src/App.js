import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landPage";
import Home from "./Components/Home/home";
import PokemonCreate from "./Components/PokemonCreate/PokemonCreate";
import Detail from "./Components/details/details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route path="/pokemons" component={PokemonCreate} />
          <Route exact path="/home/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
