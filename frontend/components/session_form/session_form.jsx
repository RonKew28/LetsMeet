import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors();
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderLoginErrors({login}) {
    if(login) {
      return (
        <div className="errors">{password}</div>
      );
    }
  }

  renderUsernameError({username}) {
    if(username) {
      return (
        <div className="errors">{username}</div>
      );
    }
  }

  renderPasswordError({password}) {
    if(password) {
      return (
        <div className="errors">{password}</div>
      );
    }
  }

  renderEmailError({password}) {
    if(password) {
      return (
        <div className="errors">{password}</div>
      );
    }
  }

  demoLogin() {
    const guest = { email: "guest_user@guest.com", password: "password" };
    this.props.processForm(guest);
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  formIntro() {
    let navText;
    let formTitle;
    if (this.props.formType === "login") {
      navText = <span>Not registered with us yet? <Link to="/signup" className="link">Sign up</Link></span>;
      formTitle = <h2>Log in</h2>;
    } else {
      navText = <span>Already a member? <Link to="/login" className="link">Log in.</Link></span>;
      formTitle = <h2>Sign up</h2>;
    }

    return (
      <div className="intro-text">
      {formTitle}
      {navText}
      </div>
    );
  }

  render() {
    let getUsername;
    let activateDemoLogin;
    if (this.props.formType === "signup") {
      getUsername = <div><label>
                      Your name (this is public):
                    </label>
                    <br/>
                      <input type="text"
                      value={ this.state.username }
                      onChange={this.update("username")}
                      placeholder="Username"/>
                    <br/>
                    </div>
                  ;
      }
    else {
      getUsername="";
    }

    if (this.props.formType === "login") {
      activateDemoLogin = <div className='session-form'>
      <button className="red-button" onClick={this.demoLogin}>Log in as Guest</button>
      </div>;
    } else {
      activateDemoLogin = "";
    }

    return (
      <div className='entire-session-form'>
        <div className="session-form">
          {this.formIntro()}
        </div>
        <div className="session-form">
          <form onSubmit={this.handleSubmit}>
            {getUsername}
            {this.renderUsernameError(this.props.errors)}
            <label> Email: </label>
            <br/>
            <input type="text"
                   value={ this.state.email }
                   onChange={this.update("email")}
                   placeholder="Email Address"/>
            <br/>
            {this.renderEmailError(this.props.errors)}
            <label> Password: </label>
            <br/>
            <input type="password"
                   value={ this.state.password }
                   onChange={this.update("password")}
                   placeholder="Password"/>
                 Password {this.renderPasswordError(this.props.errors)}
          <br/>
          <input className="red-button" type="submit" onClick={this.props.clearErrors} value={this.props.formType === "signup" ? "Sign up" : "Log in"} />
        </form>
      </div>
        {activateDemoLogin}
      </div>
    );
  }
}

export default withRouter(SessionForm);
