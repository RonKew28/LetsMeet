import React from 'react';
import { Link } from 'react-router';



  const loggedOutLinks = () => (
    <nav>
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>Sign up</Link>
    </nav>
    );

  const loggedInLinks = (logout) => (
    <nav>
      <button onClick={logout}>Log out</button>
      <Link to='/'>View Profile</Link>
    </nav>
    );


  // display({ currentUser, logout }) {
  //   return currentUser ? loggedInLinks(logout) : loggedOutLinks();
  // }

  const NavBar = ({ currentUser, logout }) => (
    currentUser ? loggedInLinks(logout) : loggedOutLinks()
    );

export default NavBar;
