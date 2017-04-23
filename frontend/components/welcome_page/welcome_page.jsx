import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="welcome-cover">

          <div className="welcome-slogan">
            <h1> Want to do something you are passionate about? </h1>
            <h3>Then LetsMeet!</h3>
              <span className="video-signup"><Link to='/signup'>Sign up</Link></span>
          </div>

          <div id="video">
            <video
            src="https://secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4"
              width="100%"
              alt="lets-meet-video"
              type="video/mp4"
              loop="loop"
              autoPlay="autoplay"
              muted="muted" />
          </div>

        </div>
    );
  }
}

export default WelcomePage;
