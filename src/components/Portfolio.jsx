import { useState, useEffect } from 'react';
import notetaker from '../assets/notetaker-example.png'
import weather from '../assets/weather-example.png'
import quizgame from '../assets/quiz-example.png'
import password from '../assets/password-example.png'
import schedule from '../assets/schedule-example.png'
import texteditor from '../assets/jate-example.png'


function Portfolio(props) {

  const [activeCheck, setActiveCheck] = useState(false);

  useEffect(() => {
    if (props.active === 'Portfolio') {
      setActiveCheck(true)
    } else {
      setActiveCheck(false)
    }
  }, [props.active]);


  return activeCheck ? (
    <>
      <div className='portfolio-chunk notetaker'>
      <img src={notetaker} alt='notetaker screenshot' height='270rem' width='370rem' />
        <a href='https://zack-module-11-note-taker-d50afde675f5.herokuapp.com/' target='_blank'>
          <h3>Notetaking App</h3>
        </a>
        <a href='https://github.com/ZSchreier/note-taker' target='_blank'>
          <p>Github Repo can be accessed here</p>
        </a>
      </div>

      <div className='portfolio-chunk'>
        <img src={weather} alt='weather screenshot' height='270rem' width='370rem' />
        <a href='https://zschreier.github.io/weather-checker/' target='_blank'>
          <h3>Weather-Checker App</h3>
        </a>
        <a href='https://github.com/ZSchreier/weather-checker' target='_blank'>
          <p>Github Repo can be accessed here</p>
        </a>
      </div>

      <div className='portfolio-chunk quiz'>
        <img src={quizgame} alt='quizgame screenshot' height='270rem' width='370rem' />
        <a href='https://zschreier.github.io/quiz-game/' target='_blank'>
          <h3>Quiz Game</h3>
        </a>
        <a href='https://github.com/ZSchreier/quiz-game' target='_blank'>
          <p>Github Repo can be accessed here</p>
        </a>
      </div>

      <div className='portfolio-chunk'>
        <img src={password} alt='password screenshot' height='270rem' width='370rem' />
        <a href='https://zschreier.github.io/password-generator/' target='_blank'>
          <h3>Password Generator</h3>
        </a>
        <a href='https://github.com/ZSchreier/password-generator' target='_blank'>
          <p>Github Repo can be accessed here</p>
        </a>
      </div>

      <div className='portfolio-chunk schedule'>
        <img src={schedule} alt='schedule screenshot' height='270rem' width='370rem' />
        <a href='https://zschreier.github.io/schedule-keeper/' target='_blank'>
          <h3>Schedule Tracker App</h3>
        </a>
        <a href='https://github.com/ZSchreier/schedule-keeper' target='_blank'>
          <p>Github Repo can be accessed here</p>
        </a>
      </div>

      <div className='portfolio-chunk'>
        <img src={texteditor} alt='texteditor screenshot' height='270rem' width='370rem' />
        <a href='https://pwa-text-editor-schreier-9af9878a429f.herokuapp.com/' target='_blank'>
          <h3>PWA Text Editor</h3>
        </a>
        <a href='https://github.com/ZSchreier/PWA' target='_blank'>
          <p>Github Repo can be accessed here</p>
        </a>
      </div>
    </>
  ) : (
    <></>
  )
}

export default Portfolio;
