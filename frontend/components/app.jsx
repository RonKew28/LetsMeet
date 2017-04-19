import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div>
    <h1>Let meet</h1>
    { children }
    <NavBarContainer className=".red-button" />
  </div>
);

export default App;
