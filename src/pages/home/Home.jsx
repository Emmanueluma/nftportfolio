import './home.css'
import Nav from '../nav/Nav'
import {BsPlus} from 'react-icons/bs'
import {BsPlayFill} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import {BiPause} from 'react-icons/bi'
import { Typewriter } from 'react-simple-typewriter'
import sound from '../../asset/sound.mp3'
import { useRef, useState } from 'react'

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpened, setIsOpended] = useState(true);

  const togglePlayPause = () => {
    const audioElement = document.getElementById('myAudio');
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <header id="home" className='maxWidth' >
        <Nav />
        <div className="flex--container">
          <div className='text'>
            <section className="intro">
              <h1>
              welcome to 
                <span> 
                  <Typewriter
                      words={[' dinero']}
                      loop={3}
                      cursor
                      cursorStyle='|'
                      typeSpeed={70}
                  />
                </span>
              </h1>
              <p>a synergy of ardent builders, alphas and gamers in web3</p>
            </section>
            {/* <section className="btnn">
            {<button onClick={() => toggleSound()}>{play ? <BsPauseFill className='ctrl'/>: <BsPlayFill className='ctrl'/>}</button>}
            </section> */}
          </div>
          <section className={isOpened ? `controller` : `controller active`}>
            <audio id="myAudio">
              <source src={sound} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          <div className="contain">
            <div className="minmax" onClick={() => setIsOpended(prev => !prev)}>{isOpened? <BsPlus /> : <BiMinus />}</div>
            <div onClick={togglePlayPause} className={isPlaying ? "player a": "player"}>
              <span className='e'></span>
              <span className='e1'></span>
              <span className='e2'></span>
              <span className='e3'></span>
              <span className='e4'></span>
              <span className='e5'></span>
            </div>
            <div className="name">
              <h4>dinero</h4>
              <p>dinero audio</p>
            </div>
            <div className="playbtn" onClick={togglePlayPause}>
              {isPlaying ? <BiPause className='playStop' /> : <BsPlayFill className='playStop' />}
            </div>
          </div>
          </section>
        </div>
    </header>
  )
}

export default Home
