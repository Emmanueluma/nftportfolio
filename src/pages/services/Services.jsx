import './services.css'
import {FaTeamspeak} from 'react-icons/fa'
import {SiMarketo} from 'react-icons/si'
import {MdCastForEducation} from 'react-icons/md'
import { useState, useEffect, useRef} from 'react'
const Services = () => {

    const sRef = useRef();
    const [sVisible, setSVisible] = useState(false);
    const s1Ref = useRef();
    const [s1Visible, setS1Visible] = useState(false);
    const s2Ref = useRef();
    const [s2Visible, setS2Visible] = useState(false);

    console.log(sVisible)
    useEffect(() => {
        const Option = {
            threshold: 0.7
        }
        
        const sObserver = new IntersectionObserver((entry, sObserver)=> {
            if(entry[0].isIntersecting === true){
                setSVisible(entry[0].isIntersecting);
                sObserver.unobserve(sRef.current)
            }
        }, Option)
        sObserver.observe(sRef.current)
        const s1Observer = new IntersectionObserver((entry, s1Observer)=> {
            if(entry[0].isIntersecting === true){
                setS1Visible(entry[0].isIntersecting);
                s1Observer.unobserve(s1Ref.current)
            }
        }, Option)
        s1Observer.observe(s1Ref.current)
        const s2Observer = new IntersectionObserver((entry, s2Observer)=> {
            if(entry[0].isIntersecting === true){
                setS2Visible(entry[0].isIntersecting);
                s2Observer.unobserve(s2Ref.current)
            }
        }, Option)
        s2Observer.observe(s2Ref.current)

    },[])


  return (
    <section className="services" id="services">
        <h1 className='header-h1'>our <span>services</span></h1>
        <div  className="flex-continer">
            <article ref={sRef} className={`flex-item one ${sVisible && "inter"}`}>
                <SiMarketo className='icon'/>
                <h3>Marketplace Access</h3>
                <p>
                    our community provides access to 
                    curated marketplaces, enabling creators to showcase and
                    sell their digital assets.
                </p>
            </article>
            <article ref={s1Ref} className={`flex-item two ${s1Visible && "inter"}`}>
                <MdCastForEducation className='icon'/>
                <h3>Education & Support</h3>
                <p>
                    we offer educational 
                    resources, tutorials, and support to help navigate 
                    the complex world of NFTs
                </p>
            </article>
            <article ref={s2Ref} className={`flex-item three ${s2Visible && "inter"}`}>
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
