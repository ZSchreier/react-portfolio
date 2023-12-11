import { useState, useEffect } from 'react';
import profile from '../assets/profile.png';

function AboutMe(props) {
  
  const [activeCheck, setActiveCheck] = useState(true); 

  useEffect(() => {
    if(props.active === 'AboutMe'){
      setActiveCheck(true)
    }else{
      setActiveCheck(false)
    }
  }, [props.active]);

  return activeCheck ? (
    <>
      <div>
        <img src={profile} alt='profile screenshot' height='270rem' width='320rem' />
        <p>Welcome to my React Portfolio! My name is Zack Schreier, and I'm a junior developer looking for an exciting place to start my career. I have previously held positions in various other occupations, from lifeguarding to quality assurance, and I'm excited to see what experiences are waiting for me in the world of coding. My stubbornness to make things right and my patience to keep plugging along are what I believe to be my strongest assets.</p>
      </div>
    </>
  ) : (
    <></>
  )

}

export default AboutMe;
