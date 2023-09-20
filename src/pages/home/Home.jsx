import './home.css'
import Nav from '../nav/Nav'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoInstagram} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import { Typewriter } from 'react-simple-typewriter'
import Ntfimage from '../../asset/nft-image.png'
import sound from '../../asset/sound.mp3'
import { useRef, useState } from 'react'
import {BsPlayFill} from 'react-icons/bs'
import {BsPauseFill} from 'react-icons/bs'

const Home = () => {
  const [play, setPlay] = useState(false);
  const ocean = useRef();

  const toggleSound = () => {
    if(play) {
      ocean.current?.pause();
      setPlay(prev => !prev);
    } else {
      ocean.current?.play();
      setPlay(prev => !prev);
    }
  }
  
  return (
    <header id="home" className='maxWidth' >
        <Nav />
        <div className="flex--container">

          <audio ref={ocean} autoPlay src={sound}/>
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
              <p>a synergy of ardent builder, alphas and gamers in web3</p>
            </section>
            <section className="btnn">
            {<button onClick={() => toggleSound()}>{play ? <BsPauseFill className='ctrl'/>: <BsPlayFill className='ctrl'/>}</button>}
            </section>
          </div>
          <div className='nft-photo'>
            <article className="image--container">
              <img src={Ntfimage} alt="nft-image" />
            </article>
          </div>
        </div>
    </header>
  )
}

export default Home
