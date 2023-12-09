import { useState, useEffect } from 'react';

function Resume(props) {
  
  const [activeCheck, setActiveCheck] = useState(false); 

  useEffect(() => {
    if(props.active === 'Resume'){
      setActiveCheck(true)
    }else{
      setActiveCheck(false)
    }
  }, [props.active]);

  return activeCheck ? (
    <>
      <div>
        <p>Resume goes here</p>
      </div>
    </>
  ) : (
    <></>
  )
}

export default Resume;
