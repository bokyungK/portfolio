import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="title">Portfolio</h1>
            </Link>
            <ul className="navigation">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li className="menu">Contact</li>
                </Link>
                <Link to="/stat" style={{ textDecoration: "none" }}>
                    <li className="menu">Stats</li>
                </Link>
                <Link to="/project" style={{ textDecoration: "none" }}>
                    <li className="menu">Projects</li>
                </Link>
            </ul>
        </header>
    )
}

export default Header;