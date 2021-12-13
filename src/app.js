import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutUs, Main, Tutorial, SignLanguage, ImageProcessing } from "./page";
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
          <Route path="/tutorial">
            <Tutorial />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/sign-language">
            <SignLanguage />
          </Route>
          <Route path="/123">
            <ImageProcessing />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}
