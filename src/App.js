import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header.js';
import Footer from './components/Footer.js'

import Home from './components/Home.js'
import Projects from './components/Projects.js'
import About from './components/About.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/about' component={About} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
