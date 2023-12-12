import { useState, useEffect } from 'react';
import Download from './Download'

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
        <Download />
        <h4>Current Proficiencies:</h4>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <h4>Acquainted With/Learning:</h4>
        <ul>
          <li>Mongoose</li>
          <li>Netlify</li>
          <li>Heroku</li>
          <li>Bootstrap</li>
          <li>Sequelize</li>
        </ul>
      </div>
    </>
  ) : (
    <></>
  )
}

export default Resume;
