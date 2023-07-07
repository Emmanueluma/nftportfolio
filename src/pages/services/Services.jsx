import './services.css'
import {FaTeamspeak} from 'react-icons/fa'
import {SiMarketo} from 'react-icons/si'
import {MdCastForEducation} from 'react-icons/md'
const Services = () => {
  return (
    <section className="services" id="services">
        <h1 className='header-h1'>our <span>services</span></h1>
        <div className="flex-continer">
            <article className="flex-item">
                <SiMarketo className='icon'/>
                <h3>Marketplace Access</h3>
                <p>
                    our community provides access to 
                    curated marketplaces, enabling creators to showcase and
                    sell their digital assets.
                </p>
            </article>
            <article className="flex-item">
                <MdCastForEducation className='icon'/>
                <h3>Education & Support</h3>
                <p>
                    we offer educational 
                    resources, tutorials, and support to help navigate 
                    the complex world of NFTs
                </p>
            </article>
            <article className="flex-item">
                <FaTeamspeak className='icon'/>
                <h3>Collaboration Opportunities</h3>
                <p>
                    our Members can connect, collaborate, 
                    and explore partnerships with like-minded individuals for mutual 
                    growth and creativity
                </p>
            </article>
        </div>
    </section>
  )
}

export default Services
