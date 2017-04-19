import React from 'react';
import { Link } from 'react-router';


  const loggedOutLinks = login => (
      <header className="main-nav">
        <nav></nav>
        <nav></nav>
        <nav className="right-nav">
          <ul>
            <li><Link to='/login'>Log in</Link></li>
            <li><Link to='/signup'>Sign up</Link></li>
          </ul>
        </nav>
      </header>
    );

  const loggedInLinks = (currentUser, logout) => (
      <header className="main-nav">
        <nav></nav>
        <nav></nav>
        <nav className="right-nav">
          <ul>
            <li><button onClick={logout}>Log out</button></li>
          <li><h3 className="red-button"><Link to='/'>View Profile</Link>{currentUser.email}</h3></li>
          </ul>
        </nav>
      </header>
    );


  const NavBar = ({ currentUser, logout, login }) => (
      currentUser ? loggedInLinks(currentUser, logout) : loggedOutLinks(login)
  );


export default NavBar;
