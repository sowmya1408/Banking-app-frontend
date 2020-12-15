import React, { useReducer, useEffect } from "react";
import Button from "../components/Button";
import { signOutEmail } from "../firebase/emailSignIn";
import { useHistory } from "react-router-dom";
import UsersList from "../pages/allUsers/UsersList";
import UserPageNavbar from "../components/UserPageNavbar";

const intialState = {
  loading: true,
  data: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH ERROR":
      return {
        loading: false,
        data: [],
        error: "Something went wrong",
      };
    default:
      return state;
  }
};
const Clients = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        const allUsers = await fetch("https://localhost:8080/clients");
        const allUsersInJson = await allUsers.json();
        dispatch({
          type: "FETCH SUCCESS",
          payload: allUsersInJson,
        });
      } catch (err) {
        dispatch({
          type: "FETCH ERROR",
        });
      }
    })();
  }, []);
  const handleClick = () => {
    signOutEmail();
    history.replace("/");
  };
  return (
    <>
      <UsersList users={state.data} loading={state.loading} />
      {/* <div>
        {state.loading && state.data.length === 0
          ? "Loading"
          : state.data[0].firstname}
        {state.error ? state.error : null}
      </div> */}
      {/* <Button text="Logout" type="button" handleClick={handleClick} /> */}
      <UserPageNavbar
        navText={[
          { id: "1", text: "AllClients", link: "/client" },
          { id: "2", text: "Create User", link: "/admin" },
        ]}
        handleLogout={handleClick}
      />
    </>
  );
};

export default Clients;
