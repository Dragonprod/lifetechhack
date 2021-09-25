import React from 'react'
import { Route } from 'react-router'
import LandingPage from "../../../pages/LandingPage";
import AuthPage from "../../../pages/AuthPage";
import UserProfilePage from "../../../pages/user/UserProfilePage";
import CalculatorPage from "../../../pages/user/CalculatorPage";

import AdminProfilePage from "../../../pages/admin/AdminProfilePage";
import HeatMapPage from "../../../pages/admin/HeatMapPage";

const routes = (
  <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={AuthPage} />
      <Route path="/profile" component={UserProfilePage} />
      <Route path="/profile/map" component={HeatMapPage} />
  </div>
)

export default routes