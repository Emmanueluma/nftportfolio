import './about.css'
import {FaEthereum} from 'react-icons/fa'
import { useRef, useState, useEffect } from 'react';
const About = () => {


    const photoRef = useRef();
    const [photoVisible, setPhotoVisible] = useState(false);
    const photo1Ref = useRef();
    const [photo1Visible, setPhoto1Visible] = useState(false);

    useEffect(() => {
        const Option = {
            threshold: 0.5
        }
        
        const photoObserver = new IntersectionObserver((entry, photoObserver)=> {
            if(entry[0].isIntersecting === true){
                setPhotoVisible(entry[0].isIntersecting);
                photoObserver.unobserve(photoRef.current)
            }
        }, Option)
        photoObserver.observe(photoRef.current)

        const photo1Observer = new IntersectionObserver((entry, photo1Observer)=> {
            if(entry[0].isIntersecting === true){
                setPhoto1Visible(entry[0].isIntersecting);
                photo1Observer.unobserve(photo1Ref.current)
            }
        }, Option)
        photo1Observer.observe(photo1Ref.current)
    },[])


  return (
    <section className="maxWidth about" id="about">
        <h1 className='header-h1'>about <span>us</span></h1>

        <section>
            <div ref={photoRef} className={`flex--items photo ${photoVisible && "inter"}`}>
                <div className='nft-photo'>
                    <article className="image--container">
                    <FaEthereum className='logo' />
                    </article>
                </div>
            </div>
            <div ref={photo1Ref} className={`flex--items text ${photo1Visible && "inter"}`}>
                <p>
                We are a Synergy Of Ardent Builder, Alphas And Gamers In Web3.
DINERO is on a mission to empower, educate, and connect Web3 explorers. We are dedicated to providing a safe and inclusive space where our members feel valued, supported, and part of a global movement. Through networking opportunities, educational resources, and a commitment to personal and collective growth, we aim to be the trusted home for NFT enthusiasts and Web3 explorers.
                </p>
            </div>
        </section>
    </section>
  )
}

export default About
