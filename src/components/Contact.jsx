import { useState, useEffect } from 'react';

function Contact(props) {
  
  const [activeCheck, setActiveCheck] = useState(false); 

  useEffect(() => {
    if(props.active === 'Contact'){
      setActiveCheck(true)
    }else{
      setActiveCheck(false)
    }
  }, [props.active]);

  return activeCheck ? (
    <>
      <div>
        <p>Contact goes here</p>
      </div>
    </>
  ) : (
    <></>
  )
}

export default Contact;
