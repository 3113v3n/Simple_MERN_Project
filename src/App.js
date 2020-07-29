import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path={"/"} component={Users} />
          <Route path={"/places/new"} component={NewPlace} />

          <Redirect to={"/"} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
