import { useState } from 'react';
import Navigation from './Navigation';

function Header(props) {
  

  return (
    <>
      <div>
        <h1>Zack Schreier</h1>
      </div>
      <Navigation active={props.active} setActive={props.setActive}/>
    </>
  );
}

export default Header;
