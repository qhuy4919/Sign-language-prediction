import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutUs, Main, Tutorial } from "./page";
import { Header, Footer } from "./component";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";

export function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" element>
            <Main />
          </Route>
          <Route path="/Tutorial">
            <Tutorial />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}
