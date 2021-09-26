import React from "react";
import { Route } from "react-router";

import LandingPage from "../../../pages/LandingPage";
import AuthPage from "../../../pages/AuthPage";

import UserProfilePage from "../../../pages/user/UserProfilePage";
import RequestsEmpty from "../../../pages/RequestsEmpty";
import Questions from "../../../pages/Questions"

import AdminProfilePage from "../../../pages/admin/AdminProfilePage";
import HeatMapPage from "../../../pages/admin/HeatMapPage";
import RegStatsMapPage from "../../../pages/admin/RegStatsMapPage";
import RequestsPage from "../../../pages/admin/RequestsPage";

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
    
    <Route
      path="/admin"
      render={({ match: { url } }) => (
        <>
          <Route path={`${url}/`} component={AdminProfilePage} exact />
          <Route path={`${url}/heatmap`} component={HeatMapPage} />
          <Route path={`${url}/rmap`} component={RegStatsMapPage} />
          <Route path={`${url}/requests`} component={RequestsPage} />
        </>
      )}
    />

  </div>
);

export default routes;
