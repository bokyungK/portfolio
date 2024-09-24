import React from 'react';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';

export default function Home() {
  const handleScroll = () => {
    
  }

  return (
    <div className='innerWrap' onScroll={handleScroll}>
      <Contact />
      <Skills />
      <Projects />
    </div>
  );
}
