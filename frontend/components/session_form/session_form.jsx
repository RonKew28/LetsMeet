import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let getUsername;
    if (this.props.formType === "signup") {
      getUsername = <label>
                      Your name (this is public):
                      <br/>
                      <input type="text"
                      value={ this.state.username }
                      onChange={this.update("username")} />
                      <br/>
                  </label>;
      }
    else {
      getUsername="";
    }
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          {this.formIntro()}
          {this.renderErrors()}
          <div>
            <br/>
            {getUsername}
            <label> Email:
              <br/>
              <input type="text"
                     value={ this.state.email }
                     onChange={this.update("email")} />
            </label>
              <br/>
            <label> Password:
              <br/>
              <input type="password"
                     value={ this.state.password }
                     onChange={this.update("password")} />
            </label>
            <br/>
            <input className="red-button" type="submit" onClick={this.props.clearErrors} value={this.props.formType === "signup" ? "Sign up" : "Log in"} />
          </div>

        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
