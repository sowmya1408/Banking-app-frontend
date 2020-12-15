import React, { useReducer } from "react";
import CreateNewUserUI from "../pages/newUser/CreateNewUserPage";
import { getTokenWithHeaders } from "../firebase/getTokenWithHeaders";
import MakeAdmin from "../pages/newUser/MakeAdmin";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

const newUserIntialState = {
  firstname: "",
  lastname: "",
  streetAddress: "",
  city: "",
  phone: "",
  email: "",
  password: "",
};
const userReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const adminInitialState = {
  userId: "",
};
const adminReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const CreateNewUser = () => {
  const [newUserState, dispatch] = useReducer(userReducer, newUserIntialState);
  const [newAdminState, adminDispatch] = useReducer(
    adminReducer,
    adminInitialState
  );

  const history = useHistory();

  const handleUserChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleAdminChange = (e) => {
    adminDispatch({ field: e.target.name, value: e.target.value });
  };
  const {
    firstname,
    lastname,
    streetAddress,
    city,
    phone,
    email,
    password,
  } = newUserState;

  const { userId } = newAdminState;

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const headers = await getTokenWithHeaders();
    const addUsers = await fetch("https://localhost:8080/clients", {
      method: "POST",
      headers,
      body: JSON.stringify({
        firstname,
        lastname,
        streetAddress,
        city,
        phone,
        email,
        password,
      }),
    });
    const addUsersResInJson = await addUsers.json();
    return addUsersResInJson;
  };
  const handleAdminSubmit = async (e) => {
    e.preventDefault();
    const headers = await getTokenWithHeaders();
    const addAdminRole = await fetch("https://localhost:8080/makeAdmin", {
      method: "POST",
      headers,
      body: JSON.stringify({
        userId,
      }),
    });

    const addAdminRoleRes = await addAdminRole.json();
    console.log(addAdminRoleRes.message);
    return addAdminRoleRes.message;
  };
  const handleBack = () => {
    history.replace("/client");
  };
  return (
    <>
      <Button text="back" type="button" handleClick={handleBack} />
      <CreateNewUserUI
        firstname={firstname}
        lastname={lastname}
        streetAddress={streetAddress}
        city={city}
        phone={phone}
        email={email}
        password={password}
        handleUserChange={handleUserChange}
        handleUserSubmit={handleUserSubmit}
      />
      <MakeAdmin
        userId={userId}
        handleAdminChange={handleAdminChange}
        handleAdminSubmit={handleAdminSubmit}
      />
    </>
  );
};

export default CreateNewUser;
