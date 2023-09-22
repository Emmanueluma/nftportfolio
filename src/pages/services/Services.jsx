import './services.css'
import {MdCastForEducation} from 'react-icons/md'
import {FaEthereum} from 'react-icons/fa'
import {GiWhiteBook} from 'react-icons/gi'
import {GiNetworkBars} from 'react-icons/gi'
import {RiVipCrown2Fill} from 'react-icons/ri'
import {MdGamepad} from 'react-icons/md'
import {LiaAccessibleIcon} from 'react-icons/lia'
import { useState, useEffect, useRef} from 'react'
const Services = () => {

    const sRef = useRef();
    const [sVisible, setSVisible] = useState(false);
    const s1Ref = useRef();
    const [s1Visible, setS1Visible] = useState(false);
    const s2Ref = useRef();
    const [s2Visible, setS2Visible] = useState(false);


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
    <section className="maxWidth services" id="services">
        <h1 className='header-h1'>Feature<span>s</span></h1>
        <div  className="flex-continer">
            <article ref={sRef} className={`flex-item one ${sVisible && "inter"}`}>
                <MdCastForEducation className='icon'/>
                <h3>Web3 Education</h3>
            </article>
            <article ref={s1Ref} className={`flex-item two ${s1Visible && "inter"}`}>
                <FaEthereum className='icon' />
                <h3>Crypto & Nft calls</h3>
            </article>
            <article ref={s2Ref} className={`flex-item three ${s2Visible && "inter"}`}>
                <GiWhiteBook className='icon'/>
                <h3>Whitelist Opportunities</h3>
            </article>
            <article ref={s2Ref} className={`flex-item three ${s2Visible && "inter"}`}>
                <GiNetworkBars className='icon' />
                <h3>Networking</h3>
            </article>
            <article ref={s2Ref} className={`flex-item three ${s2Visible && "inter"}`}>
                <RiVipCrown2Fill className='icon' />
                <h3>Exclusive partnerships</h3>
            </article>
            <article ref={s2Ref} className={`flex-item three ${s2Visible && "inter"}`}>
                <MdGamepad className='icon' />
                <h3>Events and Games</h3>
            </article>
            <article ref={s2Ref} className={`flex-item three ${s2Visible && "inter"}`}>
                <LiaAccessibleIcon className='icon' />
                <h3>Curated/Early Alphas</h3>
            </article>
        </div>
    </section>
  )
}

export default Services


/* 




 */