import { Route, Switch } from "react-router";

import { Login } from "../pages/Login";
import { CreatEvent } from "../pages/CreatEvent";
import { DashBoard } from "../pages/DashBoard";
import { EditEvent } from "../pages/EditEvent";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/createvent" component={CreatEvent} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/editevent" component={EditEvent} />
    </Switch>
  );
};
