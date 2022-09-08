import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./containers/HomeScreen";
import MembersPage from "./containers/MembersPage";
import RegistrationPage from "./containers/RegistrationPage";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomeScreen} />
      <Route path="/members" component={MembersPage} />
      <Route path="/new-member" component={RegistrationPage} />
    </Switch>
  );
}
