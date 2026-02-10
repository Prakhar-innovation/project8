import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
      hideForm: false
    };
  }

  togglePassword = () => {
    this.setState(prev => ({
      showPassword: !prev.showPassword
    }));
  };

  handleAction = (e) => {
    e.preventDefault();
    this.setState({ hideForm: true });
  };

  render() {
    return (
      <div>
        <div className="header">Instagram</div>

        <div className="form">
          {!this.state.hideForm ? (
            <div className="card">
              <h2>Login</h2>

              <input type="text" placeholder="Username" />

              <div className="password-box">
                <input
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <span className="eye" onClick={this.togglePassword}>
                  {this.state.showPassword ? "🙈" : "👁"}
                </span>
              </div>

              <button type="button" onClick={this.handleAction}>
                Sign In
              </button>

              <a href="#">Forgotten password?</a>

              <button
                type="button"
                style={{ marginTop: "10px", background: "#42b72a" }}
                onClick={this.handleAction}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <h1>Signup Successful ✅</h1>
              <p>
                We are very sorry to say that our services are not available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}