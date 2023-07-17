import './about.css'
import Discord from '../../asset/discord.png'
import {LiaDiscord} from 'react-icons/lia'
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
                    <img src={Discord} alt="discord-image" />
                    </article>
                </div>
            </div>
            <div ref={photo1Ref} className={`flex--items text ${photo1Visible && "inter"}`}>
                <h3>empowering NFT creativity</h3>
                <p>
                    Join our vibrant NFT community on Discord, where passionate creators, 
                    collectors, and enthusiasts come together. Engage in lively discussions,
                    share insights, and stay up-to-date with the latest trends. Click the button
                    below and be part of an inspiring community that celebrates digital art and blockchain
                    innovation.
                </p>
                <a href='#question' className='btn'><LiaDiscord /> discord</a>
            </div>
        </section>
    </section>
  )
}

export default About
