import React, { useReducer } from "react";
import Login from "../pages/login/Login";
import { signInWithEmail } from "../firebase/emailSignIn";
import { useHistory } from "react-router-dom";

const loginIntialState = {
  email: "",
  password: "",
};

const loginReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};
const UserLogin = () => {
  const [userState, dispatch] = useReducer(loginReducer, loginIntialState);
  const history = useHistory();
  const handleChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };
  const { email, password } = userState;
  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmail(email, password);
    // history.replace("/home");
    history.replace("/home");
  };
  return (
    <Login
      email={email}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UserLogin;
