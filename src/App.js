import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Begin from "./pages/begin";
import Game from "./pages/game";
import EndEstudantes from "./pages/gameOverEstudantes";
import EndTrabalhos from "./pages/gameOverTrabalhos";

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
          <Route path="/endEstudante" exact>
            <EndEstudantes />
          </Route>
          <Route path="/endTrabalho" exact>
            <EndTrabalhos />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;