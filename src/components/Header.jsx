import React from "react";
import { useLocation } from 'react-router-dom';
import { animateScroll, scroller } from 'react-scroll';

export default function Header({ scrollMenu }) {
  const { pathname } = useLocation();
  const pageName = pathname.replace('/', '');
  const handleScroll = (e) => {
    const { id } = e.target;
     
    if (id === 'contact') animateScroll.scrollTo(0, { smooth: true, duration: 1000 })
    else if (id === 'skills') scroller.scrollTo('toSkills', { smooth: true, duraion: 1000, offset: -30 })
    else if (id === 'projects') scroller.scrollTo('toProject', { smooth: true, duraion: 1000, offset: -30 })
  }

  return (
    <header className={`${pageName ? pageName : 'home'} ${scrollMenu ? 'scroll' : ''}`}>
      <ul className="navigation">
        <li id='contact' onClick={handleScroll} className="menu">Contact</li>
        <li id='skills' onClick={handleScroll} className="menu">Skills</li>
        <li id='projects' onClick={handleScroll} className="menu">Projects</li>
      </ul>
    </header>
  )
}
