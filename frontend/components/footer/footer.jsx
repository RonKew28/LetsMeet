import React from 'react';
import { Link } from 'react-router';


  const Footer = ({currentUser}) => (
      <footer className="footer-main">
        <nav className="footer-left">
          <ul>
            <li><Link to='/create'>Start a LetsMeet group</Link></li>
          </ul>
        </nav>
        <nav className="footer-center">
          <ul>
            <li><a href='https://www.linkedin.com/in/ronnie-kewalramani'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a href='https://github.com/RonKew28'><i className="fa fa-github" aria-hidden="true"></i></a></li>
          </ul>
        </nav>
        <nav className='footer-right'>
          <ul>
            {currentUser ? <li><Link to='/logout'>Log out</Link></li> : <li ><Link to='/login'>Log in</Link></li> }
          </ul>
        </nav>

      </footer>
    );


export default Footer;
