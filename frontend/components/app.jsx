import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div>
    <h1>Let's meet</h1>
    <NavBarContainer className=".red-button" />
    { children }
  </div>
);

export default App;
