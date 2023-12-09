import { useState } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Display() {


  return (
    <>
      <Header />
      <div>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </div>
      <Footer />
    </>
  );
}

export default Display;
