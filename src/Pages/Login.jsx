import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");

  function submitform(event) {
    event.preventDefault();

    const storeditem1 = sessionStorage.getItem("name");
    const storeditem2 = sessionStorage.getItem("pass");

    if (storeditem1 === name && storeditem2 === pass) {
      alert("Login Successful");
      window.location.href = "/"; // Redirects to main page in the same tab
    } else {
      alert("Invalid email or password.");
    }
  }

  function em(e) {
    setName(e.target.value);
  }

  function paswrd(e) {
    setPass(e.target.value);
  }

  return (
    
    <div id="loginbox">
        <h1 id="logo">Shopify</h1>
      <form id="loginForm" className="login-form" onSubmit={submitform}>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <div className="form-group">
          <label htmlFor="loginName" className="form-label">Name:</label>
          <input
            type="text"
            id="loginName"
            className="form-input"
            placeholder="Enter your name"
            onChange={em}
            required
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword" className="form-label">Password:</label>
          <input
            type="password"
            id="loginPassword"
            className="form-input"
            placeholder="Enter your password"
            onChange={paswrd}
            required
            value={pass}
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <Link to="/signinpage" className="signup-link">Don't have an account? Signup</Link>
      </div>
    </form>
    </div>
  );
}
