import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import CoffeeList from './CoffeeList.js';
import LandingPage from './LandingPage.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
            <Switch>
              <Route 
                path="/coffeelist" 
                exact
                render={(routerProps) => <CoffeeList {...routerProps} />} 
                />
              <Route 
                path="/" 
                exact
                render={(routerProps) => <LandingPage {...routerProps} />} 
                />
            </Switch>
        </Router>


        
      </header>
    </div>
  );
}

export default App;
