import React from "react";
import './App.css'
import Header from "./Header-Footer/header";
import Footer from "./Header-Footer/footer";
import AboutUs from "./Components/AboutUs";

function VeChungToi() {
    return (
        <div className="AboutUs">
            <Header />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default VeChungToi;

