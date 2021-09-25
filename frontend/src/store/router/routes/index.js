import React from "react";
import { Route } from "react-router";
import LandingPage from "../../../pages/LandingPage";
import AuthPage from "../../../pages/AuthPage";
import UserProfilePage from "../../../pages/user/UserProfilePage";
import CalculatorPage from "../../../pages/user/CalculatorPage";

import AdminProfilePage from "../../../pages/admin/AdminProfilePage";
import HeatMapPage from "../../../pages/admin/HeatMapPage";
import RequestsEmpty from "../../../pages/RequestsEmpty";
import Questions from "../../../pages/Questions"

const routes = (
  <div>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={AuthPage} />
    <Route
      path="/profile"
      render={({ match: { url } }) => (
        <>
          <Route path={`${url}/`} component={UserProfilePage} exact />
          <Route path={`${url}/map`} component={HeatMapPage} />
          <Route path={`${url}/requests`} component={RequestsEmpty} />
          <Route path={`${url}/questions`} component={Questions} />
        </>
      )}
    />
    {/* <Route path="/profile" component={UserProfilePage} />
    <Route path="/profile/map" component={HeatMapPage} />
    <Route path="/profile/requests" component={RequestsEmpty} /> */}
  </div>
);

export default routes;
