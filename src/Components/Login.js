import React from "react";
import "../CSS/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    //some firebase work
  };

  const register = (e) => {
    e.preventDefault();

    //firebase work
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_log.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sigin</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>By Signing in you agrr to save the amazon</p>

        <button onClick={register} className="login_registerButton">
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
