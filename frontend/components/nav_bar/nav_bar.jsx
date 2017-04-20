import React from 'react';
import { Link } from 'react-router';


  const loggedOutLinks = login => (
      <header className="main-nav">
        <nav className="right-nav nav-links">
          <Link to='/create'>Create a LetsMeet group</Link>
        </nav>
        <nav className="sub-nav">
          <nav className="right-nav nav-links">
              <Link to='/login'>Log in</Link>
          </nav>
          <nav className="right-nav red-button">
              <Link to='/signup'>Sign up</Link>
          </nav>
        </nav>

      </header>
    );

  const loggedInLinks = (currentUser, logout) => (
      <header className="main-nav">
      <nav className="right-nav"></nav>
        <nav className="right-nav nav-links">
            <button onClick={logout}>Log out</button>
        </nav>
        <nav className="sub-nav">
          <nav className="right-nav red-button">
            <Link to='/'>View Profile</Link>
          </nav>
        </nav>
      </header>
    );


  const NavBar = ({ currentUser, logout, login }) => (
      currentUser ? loggedInLinks(currentUser, logout) : loggedOutLinks(login)
  );


export default NavBar;
