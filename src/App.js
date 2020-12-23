import React, { useState, useEffect } from "react";
import Clients from "./containers/Clients.container";
import UserLogin from "./containers/UserLogin.container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase";
import CreateNewUser from "./containers/CreateNewUser.container";
import "./App.css";
import UserDetails from "./containers/UserDetails.container";
import Home from "./components/Home";
import UserContext from "./helpers/UserContext";
import SingleUser from "./containers/SingleUser";
import DepositBalance from "./containers/DepositBalance.container";
import WithdrawBalance from "./containers/WithdrawBalance.container";
import Transfer from "./containers/Transfer.container";
function App() {
  const [usersState, setUserState] = useState(null);
  const [usersRole, setUsersRole] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        const userRole = await user.getIdTokenResult();
        const userRoleAdmin = await userRole.claims.admin;
        setUserState(user);
        setUsersRole(userRoleAdmin);
      } else {
        setUserState(null);
        setUsersRole(null);
      }
    });
  }, []);
  console.log(usersRole);
  // useEffect(() => {
  //   (async () => {
  //     const token = await auth().currentUser.getIdTokenResult();
  //     console.log(token);
  //   })();
  // }, [userState]);

  return (
    <UserContext.Provider value={(usersState, usersRole)}>
      <Router>
        <Switch>
          <Route path="/client" component={Clients} />
          <Route path="/admin" component={CreateNewUser} />
          <Route path="/userDetails/:userSlug" component={UserDetails} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={SingleUser} />
          <Route path="/deposit/:accountSlug" component={DepositBalance} />
          <Route path="/withdraw/:withdrawSlug" component={WithdrawBalance} />
          <Route path="/transfer/:transferSlug" component={Transfer} />

          <Route exact path="/" component={UserLogin} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
