import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddUser } from "./Users/users/AddUser";
import { EditUser } from "./Users/users/EditUser";
import React from "react";
import { UserList } from "./Users/users/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
