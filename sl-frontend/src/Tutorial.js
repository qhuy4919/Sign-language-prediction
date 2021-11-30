import React from "react";
import './App.css'
import Header from "./Header-Footer/header";
import Footer from "./Header-Footer/footer";
import Tutorial from "./Components/Tutorial";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Header-Footer/header-footer.css";

function HuongDan() {
    return (
        <div className="Tutorial">
            <Header />
            <Tutorial />
            {/*<Footer />*/}
        </div>
    );
}

export default HuongDan;

