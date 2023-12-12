import { useState, useEffect } from 'react';

function Contact(props) {
  
  const [activeCheck, setActiveCheck] = useState(false); 
  const [contactInfo, setContactInfo] = useState({name: '', email: '', message: ''}); 
  const [checks, setChecks] = useState({name: '', email: '', message: '', pass: ''}); 

  useEffect(() => {
    if(props.active === 'Contact'){
      setActiveCheck(true)
    }else{
      setActiveCheck(false)
    }
  }, [props.active]);

  function handleInputChange(event){
    setContactInfo({...contactInfo, [event.target.name]: event.target.value})
  }

  // self-made form validation, will be re-made later for cleaner appearance
  function handleSubmit(event){
    event.preventDefault()

    const nameRegExp = /^([\sa-zA-Z]{1,})$$/i
    const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i
    const messageRegExp = /^([\sa-zA-Z]{1,})$$/i


    const isName = nameRegExp.test(contactInfo.name)
    const isEmail = emailRegExp.test(contactInfo.email)
    const isMessage = messageRegExp.test(contactInfo.message)
    
    if(!isName || !isEmail || !isMessage){
      if (!isName){
        setChecks({...checks, name: 'Please input a name!'})
      }else{
        setChecks({...checks, name: ''})
      }

      if (!isEmail){
        setChecks({...checks, email: 'Please input a proper email!'})
      }else{
        setChecks({...checks, email: ''})
      }

      if (!isMessage){
        setChecks({...checks, message: 'Please input a message!'})
      }else{
        setChecks({...checks, message: ''})
      }
    }else{
      setChecks({...checks, name: ''})
      setChecks({...checks, email: ''})
      setChecks({...checks, message: ''})
  
      setChecks({...checks, pass: `Thank you! I'll contact you later!`})
    }
  }
  
  return activeCheck ? (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' name='name' value={contactInfo.name} onChange={handleInputChange}/>
        <div></div>
        <label>Email: </label>
        <input type='email' name='email' value={contactInfo.email} onChange={handleInputChange}/>
        <div></div>
        <label>Message: </label>
        <input type='text' name='message' value={contactInfo.message} onChange={handleInputChange}/>
        <div></div>
        <button>Confirm</button>
      </form>
      <p>{checks.name}</p>
      <p>{checks.email}</p>
      <p>{checks.message}</p>
      <p>{checks.pass}</p>
    </>
  ) : (
    <></>
  )
}

export default Contact;
