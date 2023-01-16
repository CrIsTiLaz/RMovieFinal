import React, { useState } from "react";
import "./loginStyle.css";
import Layout from "../components/Layout";
function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      console.log("Username:", username);
      //   console.log("Email:", email);
      console.log("Password:", password);

      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
        });
    }
  }

  return (
    <Layout>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit} className="form">
            <label>
              Username:
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default RegisterForm;