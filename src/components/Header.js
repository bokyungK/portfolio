import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <ul className="navigation">
                <Link to="/"><li className="menu">Contact</li></Link>
                <Link to="/skill"><li className="menu">Skills</li></Link>
                <Link to="/project"><li className="menu">Projects</li></Link>
            </ul>
        </header>
    )
}

export default Header;