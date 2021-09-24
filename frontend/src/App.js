import React from "react";

import "./App.css";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/roster" component={Roster} />
        <Route path="/schedule" component={Schedule} />
      </Switch>
    </main>
  );
}

export default App;
