import { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Header from './Header';
import Footer from './Footer';

function Display() {
  const [active, setActive] = useState('AboutMe');



  return (
    <>
      <Header active={active} setActive={setActive}/>
      <div>
        <AboutMe active={active}/>
        <Portfolio active={active}/>
        <Contact active={active}/>
        <Resume active={active}/>
      </div>
      <Footer />
    </>
  );
}

export default Display;
