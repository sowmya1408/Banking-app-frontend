import React, { createContext, useState, useEffect } from "react";
import Clients from "./containers/Clients.container";
import UserLogin from "./containers/UserLogin.container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase";
import CreateNewUser from "./containers/CreateNewUser.container";
import "./App.css";

export const UserContext = createContext(null);

function App() {
  const [userState, setUserState] = useState(null);
  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        setUserState(user);
      } else {
        setUserState(null);
      }
    });
  }, []);
  return (
    <Router>
      <UserContext.Provider value={userState}>
        <Switch>
          <Route path="/client" component={Clients} />
          <Route path="/admin" component={CreateNewUser} />
          <Route exact path="/" component={UserLogin} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
