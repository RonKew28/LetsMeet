import React from 'react';
import { Link } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import FooterContainer from './footer/footer_container';

const App = ({ children }) => (
  <div>
    <main>
    <NavBarContainer />
    </main>
    { children }
    <FooterContainer />
  </div>
);

export default App;
