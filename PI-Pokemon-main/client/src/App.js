import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  landingPage  from './Components/LandingPage/landPage'
import  Home  from './Components/Home/home'
import Details from './Components/details/details'
import PostPokemon from './Components/pokemonCreate/createPokemon';
function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = { landingPage }/>
        <Route path = '/home' component = { Home }/>
        <Route path = '/pokemons/:id' component={Details}/>
        <Route path = '/post' component={PostPokemon}/>
      </Switch>
    </div>
    </BrowserRouter>
    )
}

export default App;
