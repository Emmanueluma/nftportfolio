import './partnerships.css'
import {WiDirectionUpRight} from 'react-icons/wi'

const Partnerships = () => {
  return (
    <section className="path" id='partnerships'>
    <h1 className='header-h1'>partner<span>ships</span></h1>

      <article>
        <p>
          We support Web3 projects and founders who are bringing something 
          new and unique to the Web3 ecosystem. We have collaborated with over 
          500 projects, and we welcome new top-tier projects and builders to 
          collaborate with us. To contact us about collaborations and partnerships,
          click the button below.
        </p>
        <a href="https://twitter.com/Dineroxyz"  className='btnw' target="_blank" rel="noopener noreferrer">get in touch <WiDirectionUpRight className='logo' /></a>
      </article>

    </section>
  )
}

export default Partnerships
