import React from "react";
import './App.css'
import Header from "./Header-Footer/header";
import Footer from "./Header-Footer/footer";
import Main from "./Header-Footer/main";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Header-Footer/header-footer.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

