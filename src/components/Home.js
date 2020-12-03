import React, { useContext } from "react";
import UserContext from "../helpers/UserContext";
import { useHistory } from "react-router-dom";

const Home = () => {
  const usersRole = useContext(UserContext);
  console.log(usersRole);
  const userRoleHistory = useHistory();
  console.log(usersRole);

  return (
    <div>
      {usersRole ? userRoleHistory.replace("/client") : null}
      {usersRole === undefined ? userRoleHistory.replace("/user") : null}
    </div>
  );
};

export default Home;
