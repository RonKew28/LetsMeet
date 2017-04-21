import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="welcome">
        <div className="welcome-content">
          <section>
            <h1> Want to do something you are passionate about? </h1>
            <h3>Then LetsMeet!</h3>
          </section>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
