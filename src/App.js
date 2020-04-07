import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header.js';
import Footer from './components/Footer.js'

import Home from './components/Home.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
