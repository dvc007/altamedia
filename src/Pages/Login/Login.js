import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const handleGoogleSignIn = () => {};
  const handleFBSignIn = () => {};
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign in
          </h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onclick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g">Sign in with Google+</i>
              </span>
            </button>
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onclick={handleFBSignIn}
            >
              <span>
                <i className="fab fa-facebook-f">Sign in with Facebook</i>
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}>OR</p>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit">
            Sign In
          </button>
          <hr />
          <p>Don't have an account</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"></i> Sign up New Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
