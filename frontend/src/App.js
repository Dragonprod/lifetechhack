import React from "react";
import LandingPage from "./pages/LandingPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import CalculatorPage from "./pages/user/CalculatorPage";
import AdminProfilePage from "./pages/admin/AdminProfilePage";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProfilePage from "./pages/AuthProfilePage";
import HeatMapPage from "./pages/admin/HeatMapPage"
function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/admin" component={Roster} />
        <Route path="/login" component={LoginPage}> */}
        <Route path="/profile" component={UserProfilePage} />
        <Route path="/auth" component={AuthProfilePage} />
        <Route path="/map" component={HeatMapPage} />
      </Switch>
    </main>
  );
}

export default App;
