import { useState, useEffect } from 'react';

function Portfolio(props) {
  
  const [activeCheck, setActiveCheck] = useState(false); 

  useEffect(() => {
    if(props.active === 'Portfolio'){
      setActiveCheck(true)
    }else{
      setActiveCheck(false)
    }
  }, [props.active]);

  return activeCheck ? (
    <>
      <div>
        <p>Portfolio goes here</p>
      </div>
    </>
  ) : (
    <></>
  )
}

export default Portfolio;
