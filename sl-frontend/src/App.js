import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header-Footer/header";
import Footer from "../Header-Footer/footer";
import Main from "../Header-Footer/main";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./header-footer.scss";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

