import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
          <Route path='/experience' component={Experience} />
          <Route path='/contact' component={ContactMe} />
        </Switch>
        <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
      </Router>
    </>
  );
}

export default App;
