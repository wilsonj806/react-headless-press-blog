import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={["/"]} exact={true} component={Landing} />
      <Route path="/blog/:id" exact={true} component={Blog} />
    </Switch>
  );
};

export default AppRoutes;
