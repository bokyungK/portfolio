import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
    const [menu, setMenu] = useState([]);
    const location = useLocation();
  
    useEffect(() => {
      const url = location.pathname;
      const index = url.indexOf('/', 10);
  
      if (index) {
        const path = url.substring(index);
  
        if (path === '/') {
          setMenu(['#928490', '', '']);
        } else if (path === '/stat') {
          setMenu(['', '#928490', '']);
        } else if (path === '/project') {
          setMenu(['', '', '#928490']);
        }
      }
    }, [location])
    return (
        <header>
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="title">Portfolio!</h1>
            </Link>
            <ul className="navigation">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <li style={{ backgroundColor: menu[0], color: menu[0] !== '' ? '#F3E8EB' : '' }} className="menu">Contact</li>
                </Link>
                <Link to="/stat" style={{ textDecoration: "none" }}>
                    <li style={{ backgroundColor: menu[1], color: menu[1] !== '' ? '#F3E8EB' : '' }} className="menu">Stats</li>
                </Link>
                <Link to="/project" style={{ textDecoration: "none" }}>
                    <li style={{ backgroundColor: menu[2], color: menu[2] !== '' ? '#F3E8EB' : ''  }} className="menu">Projects</li>
                </Link>
            </ul>
        </header>
    )
}

export default Header;