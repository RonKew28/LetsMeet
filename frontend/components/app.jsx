import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div>
    <NavBarContainer />
    { children }
  </div>
);

export default App;
