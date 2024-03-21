import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
<ul>
      <NavLink activeClassName=" active" to="/home">Home</NavLink><br/>
      <NavLink  activeClassName=" active"to="/about">About</NavLink><br/>
      <NavLink  activeClassName=" active"to="/contact">Contact</NavLink><br/>

</ul>

      ) 
    }
   
  export default Navigation;