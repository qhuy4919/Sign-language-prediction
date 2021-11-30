import React from "react";
import './App.css'
import Header from "./Header-Footer/header";
import Footer from "./Header-Footer/footer";
import Main from "./Header-Footer/main";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Header-Footer/header-footer.css";
import AboutUs from "./AboutUs";
import Tutorial from "./Tutorial";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Main/>*/}
            <Router>
                <Switch>
                    <Route exact path="/" element>
                        <Main/>
                    </Route>
                    <Route path="/Tutorial">
                        <Tutorial/>
                    </Route>
                    <Route path="/AboutUs">
                        <AboutUs/>
                    </Route>
                </Switch>
            </Router>

            <Footer/>
        </div>
    );
}

export default App;

