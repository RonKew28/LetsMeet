import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


  const loggedOutLinks = login => (
      <header className="main-nav">
        <nav className="left-nav">
          <ul>
            <li><Link to='/create'>Create a LetsMeet group</Link></li>
          </ul>
        </nav>
        <nav className="center-nav">
          <ul>
            <li><Link to='/'><h1 id='logo'>Let's Meet!</h1></Link></li>
          </ul>
        </nav>
        <nav className='right-nav'>
            <ul>
              <li ><Link to='/login'>Log in</Link></li>
              <li><Link to='/signup'>Sign up</Link></li>
            </ul>
        </nav>
      </header>
    );

  const loggedInLinks = (currentUser, logout) => (
    <header className="main-nav">
      <nav className="left-nav">
        <ul>
          <li><Link to='/create'>Create a LetsMeet group</Link></li>
        </ul>
      </nav>
      <nav className="center-nav">
        <ul>
          <li><Link to='/'><h1 id='logo'>Let's Meet!</h1></Link></li>
        </ul>
      </nav>
      <nav className='right-nav'>
          <ul>
            <li><button onClick={logout}>Log out</button></li>
            <li id="user-greeting">Hello, {currentUser.username}</li>
            <li><Link to='/search'><img id="profile-pic" src={currentUser.profile_pic_url}/></Link></li>
            <li><Link to='/search'>Search</Link></li>
          </ul>
      </nav>
    </header>
    );


  const NavBar = ({ currentUser, logout, login }) => (
      currentUser ? loggedInLinks(currentUser, logout) : loggedOutLinks(login)
  );


export default NavBar;
