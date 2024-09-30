import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { animateScroll, scroller } from 'react-scroll';

const INITIAL_ACTIVE = {
  contact: '',
  skills: '',
  projects: '',
}

export default function Header({ scrollMenu, page }) {
  const { pathname } = useLocation();
  const [active, setActive] = useState({...INITIAL_ACTIVE, contact: 'active'});
  const pageName = pathname.replace('/', '');
  const handleScroll = (e) => {
    const value = e.target.innerText.toLowerCase();
     
    if (value === 'contact') animateScroll.scrollTo(0, { smooth: true, duration: 1000 })
    else if (value === 'skills') {
      scroller.scrollTo('toSkills', { smooth: true, duraion: 1000, offset: -30 })
    } else if (value === 'projects') {
      scroller.scrollTo('toProject', { smooth: true, duraion: 1000, offset: -30 })
    }

    setActive({ ...INITIAL_ACTIVE, [value]: 'active' });
  }

  useEffect(() => {
    if (page === 1) setActive({...INITIAL_ACTIVE, contact: 'active'})
    else if (page === 2) setActive({...INITIAL_ACTIVE, skills: 'active'})
    else setActive({...INITIAL_ACTIVE, projects: 'active'})
  }, [page])

  return (
    <header className={`${pageName ? pageName : 'home'} ${scrollMenu}`}>
      <ul className="navigation">
        <li onClick={handleScroll} className={`menu ${active.contact}`}>Contact</li>
        <li onClick={handleScroll} className={`menu ${active.skills}`}>Skills</li>
        <li onClick={handleScroll} className={`menu ${active.projects}`}>Projects</li>
      </ul>
      <ul className="navigation">
        <li onClick={handleScroll} className={`menu ${active.contact}`}>Contact</li>
        <li onClick={handleScroll} className={`menu ${active.skills}`}>Skills</li>
        <li onClick={handleScroll} className={`menu ${active.projects}`}>Projects</li>
      </ul>
    </header>
  )
}
