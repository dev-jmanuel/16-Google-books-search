import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="title">Google Books</div>
            <input type="text" id="search" placeholder=" Search for a book..."></input>

        </nav>

    );
}

export default Navbar;
