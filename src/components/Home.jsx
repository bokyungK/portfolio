import React from 'react';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';

export default function Home() {
  return (
    <div className='innerWrap'>
      <Contact />
      <Skills />
      <Projects />
    </div>
  );
}
