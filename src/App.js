import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header.js';
import Footer from './components/Footer.js'

import Home from './components/Home.js'
import ProjectList from './components/ProjectList.js'
import About from './components/About.js'
import Contact from './components/Contact.js'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  root: {
      backgroundColor: '#32CD32',
  }
}))

const App = () => {
  const classes = useStyles();

  return (
    <Paper elevation={4}>
      <div className={classes.root}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' component={ProjectList}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Paper>
  );
}

export default App;
