import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div>
    <h1>Le</h1>
    <NavBarContainer />
    { children }
  </div>
);

export default App;
