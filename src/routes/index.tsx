import { Switch } from "react-router";
import { Login } from "../pages/Login";
import { CreatEvent } from "../pages/CreatEvent";
import { DashBoard } from "../pages/DashBoard";
import { EditEvent } from "../pages/EditEvent";

import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/createvent" component={CreatEvent} isPrivate />
      <Route exact path="/dashboard" component={DashBoard} isPrivate />
      <Route exact path="/editevent/:id" component={EditEvent} isPrivate />
    </Switch>
  );
};
