import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Access from "./Access";
import Password from "./password";

function App() {
  return (
    <div className="App">
      <div className="top-blanck"></div>
      <div className="medio_y_centro">
        <Router>
          <div className="columns-wrapper">
            <div className="sign-info-wrapper">
              <div className="sign-info">
                <Switch>
                  <Route exact path="/" component={Access} />
                  <Route path="/password" component={Password} />
                </Switch>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
