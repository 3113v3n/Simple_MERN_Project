import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlaces";
import Auth from "./users/pages/Auth";
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path={"/"} component={Users} />
          <Route path={"/places/new"} component={NewPlace} />
          <Route path={"/:userId/places"} exact component={UserPlaces} />
          <Route path={"/places/:placeId"} exact component={UpdatePlace} />
          <Route path={"/auth/login"} exact component={Auth} />
          <Redirect to={"/"} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
