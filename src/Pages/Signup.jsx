import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  let [name, setName] = useState("");
  let [pass, setPass] = useState("");
  let [confirmPass, setConfirmpass] = useState("");

  

  function submitform(event) {
    event.preventDefault();

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("pass", pass);

    window.location.href="/loginpage"
  }

  function em(e) {
    setName(e.target.value);
  }
  function psw(e) {
    setPass(e.target.value);
  }
  function pswrd(e) {
    setConfirmpass(e.target.value);
  }

  return (
    <div id="signupbox">
        <h1 id="logo">Shopify</h1>
      <form id="signupForm" onSubmit={submitform}>
      <table>
        <tr>
          <td><label htmlFor="signupName" className="formLabel">Name:</label></td>
          <td><input type="text" id="signupName" className="formInput" placeholder="Enter your name" value={name} onChange={em} /></td>
        </tr>
        <tr>
          <td><label htmlFor="signupPassword" className="formLabel">Password:</label></td>
          <td><input type="password" id="signupPassword" className="formInput" placeholder="Enter your password" value={pass} onChange={psw} required minLength="6" /></td>
        </tr>
        <tr>
          <td><label htmlFor="signupConfirmpassword" className="formLabel">Confirm Password:</label></td>
          <td><input type="password" id="signupConfirmpassword" className="formInput" placeholder="Confirm your password" value={confirmPass} onChange={pswrd} required minLength="6" /></td>
        </tr>
      </table>
      <button type="submit" className="signupBtn">Signup</button>
      <Link to="/loginpage" className="loginLink">Already have an account? Login</Link>
    </form>
    </div>
  );
}
