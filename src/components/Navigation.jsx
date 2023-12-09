import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav'

function Navigation(props) {
  
  function checkClick(e){
    console.log(e.target.value)
    props.setActive(e.target.value)
  }

  useEffect(() => {
    console.log(props.active)
  }, [props.active]);

  return (
    <Nav className="justify-content-end" as="ul">
      <Nav.Item as="li">
        <button value='AboutMe' onClick={() => props.setActive('AboutMe')}>About Me</button>
      </Nav.Item>
      <Nav.Item as="li">
        <button value='Portfolio' onClick={() => props.setActive('Portfolio')}>Portfolio</button>
      </Nav.Item>
      <Nav.Item as="li">
        <button value='Resume' onClick={() => props.setActive('Resume')}>Resume</button>
      </Nav.Item>
      <Nav.Item as="li">
        <button value='Contact' onClick={() => props.setActive('Contact')}>Contact</button>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;