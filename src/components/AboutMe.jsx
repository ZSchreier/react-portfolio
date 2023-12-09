import { useState, useEffect } from 'react';

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
        <p>AboutMe goes here</p>
      </div>
    </>
  ) : (
    <></>
  )

}

export default AboutMe;
