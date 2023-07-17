import './home.css'
import Nav from '../nav/Nav'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoInstagram} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import { Typewriter } from 'react-simple-typewriter'
import Ntfimage from '../../asset/nft-image.png'
const Home = () => {
  return (
    <header id="home" className='maxWidth' >
        <Nav />
        <div className="flex--container">
          <div className='text'>
            <section className="intro">
              <h1>discover, connect, and thrive</h1>
              <h1>in</h1>
              <h1>
                our NFt 
                <span> 
                  <Typewriter
                      words={[' community']}
                      loop={3}
                      cursor
                      cursorStyle='|'
                      typeSpeed={70}
                  />
                </span>
              </h1>
              <p>
                Welcome to our vibrant NFT community—a
                hub for digital art, innovation, and blockchain enthusiasts!
              </p>
            </section>
            <section className="button">
              <a href="http://" target="_blank" rel="noopener noreferrer"><BiLogoFacebook className='icons' /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><BiLogoTwitter className='icons' /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><BiLogoInstagram className='icons' /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><BiLogoLinkedin className='icons' /></a>
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
