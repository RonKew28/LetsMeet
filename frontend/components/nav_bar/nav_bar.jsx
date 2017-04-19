import React from 'react';
import { Link } from 'react-router';



  const loggedOutLinks = () => (
    <nav>
      <Link to='/login'>Log in</Link>
      <Link to='/signup'>Sign up</Link>
    </nav>
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
