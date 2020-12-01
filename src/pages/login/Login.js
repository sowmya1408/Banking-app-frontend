import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./login.css";

function Login({ email, password, handleChange, handleSubmit }) {
  console.log(email, password);
  return (
    <section className="login-section">
      <form onSubmit={handleSubmit} className="form">
        <Input
          inputId="username"
          type="email"
          text={<ion-icon name="person-outline" pull="left"></ion-icon>}
          placeholder="Email"
          name="email"
          value={email}
          handleChange={handleChange}
        />
        <Input
          inputId="userpassword"
          type="password"
          text={<ion-icon name="lock-closed-outline"></ion-icon>}
          placeholder="Password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <Button type="submit" text="Login" />
      </form>
    </section>
  );
}

export default Login;
