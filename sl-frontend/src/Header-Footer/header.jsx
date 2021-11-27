import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Container, NavItem } from "reactstrap";


class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <nav
                    color="white"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                >
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </nav>
            </div>
        );
    }
}

export default Header;
