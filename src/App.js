import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Begin from "./pages/begin";
import Game from "./pages/game";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Begin />
          </Route>
          <Route path="/game" exact>
            <Game />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;