import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div>
    <header>
      <h1>Let's Meet</h1>
      <NavBarContainer />
    </header>
    { children }
  </div>
);

export default App;
