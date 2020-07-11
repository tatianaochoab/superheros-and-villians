import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import SuperHero from './components/SuperHero';
import InternalPage from './components/InternalPage';

function App() {
  return (
    <section className='App'>
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={SuperHero} />
            <Route exact path='/:id' component={InternalPage} />
          </Switch>
      </BrowserRouter>
    </section>
    
  );
}

export default App;
