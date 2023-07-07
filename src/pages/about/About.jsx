import './about.css'
import Discord from '../../asset/discord.png'
import {LiaDiscord} from 'react-icons/lia'
const About = () => {
  return (
    <section className="about" id="about">
        <div className="flex--items photo">
            <div className='nft-photo'>
                <article className="image--container">
                <img src={Discord} alt="discord-image" />
                </article>
            </div>
        </div>
        <div className="flex--items text">
            <h1>about <span>us</span></h1>
            <h3>empowering NFT creativity</h3>
            <p>
                Join our vibrant NFT community on Discord, where passionate creators, 
                collectors, and enthusiasts come together. Engage in lively discussions,
                share insights, and stay up-to-date with the latest trends. Click the button
                below and be part of an inspiring community that celebrates digital art and blockchain
                innovation.
            </p>
            <a href='#' className='btn'><LiaDiscord /> discord</a>
        </div>
    </section>
  )
}

export default About
