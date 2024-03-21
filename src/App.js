import React from "react";
import "./style.css";
import Home from"./Home";
import About from"./About";
import Contact from"./Contact";
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
function App() {
  return (
    <Router>
    <div classname= "App">

    <Jumbotron />
     
      {<Navigation />}
    

     <Route path="/home" component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
      
    </div>
    </Router>
  );
}
export default App;