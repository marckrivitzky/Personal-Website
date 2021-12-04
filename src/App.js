import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import CodingProjects from './components/CodingProjects';
import Resume from './components/Resume';
import DigitalArt from './components/DigitalArt';
import Game from './components/Game';
import EyeSpy from './components/EyeSpy'
import Games from './components/Games';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/CodingProjects" exact>
            <CodingProjects />
          </Route>
        
          <Route path="/Resume" exact>
            <Resume />
          </Route>

          <Route path="/DigitalArt" exact>
            <DigitalArt />
          </Route>

        <Route path="/Games" exact>
          <Games/>
        </Route>
  
          <Route path="/Game" exact>
            <Game />
          </Route>

          <Route path="/EyeSpy" exact>
            <EyeSpy />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;