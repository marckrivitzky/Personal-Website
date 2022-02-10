import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import CodingProjects from './components/CodingProjects';
import Resume from './components/Resume';
import DigitalArt from './components/DigitalArt';


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

    

        </Switch>
      </Router>
    </div>
  );
}

export default App;