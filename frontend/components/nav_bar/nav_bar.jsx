import React from 'react';
import { Link } from 'react-router';



  const loggedOutLinks = () => (
    <header className="main-nav">
      <nav className="left-nav">
        <ul>
          <li><Link to='/login'>Log in</Link></li>
          <li><Link to='/signup'>Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );

  const loggedInLinks = (currentUser, logout) => (
    <nav>
      <div>
        <button onClick={logout}>Log out</button>
      </div>
      <h3 className="red-button"><Link to='/'>View Profile</Link>{currentUser.email}</h3>
    </nav>
    );


  // display({ currentUser, logout }) {
  //   return currentUser ? loggedInLinks(logout) : loggedOutLinks();
  // }

  const NavBar = ({ currentUser, logout }) => (
    currentUser ? loggedInLinks(currentUser, logout) : loggedOutLinks()
    );

export default NavBar;
