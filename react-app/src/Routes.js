import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={["/"]} exact={true} component={Landing} />
    </Switch>
  );
};

export default AppRoutes;
