import { useRef, useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi'
import './nav.css'
const Nav = () => {
    const [nav, setNav] = useState('#');
    const [displayNav, setDisplayNav] = useState(false);
    const toggleNav = () => {
        setDisplayNav(prev => !prev)
    }
    const path = e => {
        setNav(`${e}`)
        setDisplayNav(prev => !prev)
    }
    return ( 
        <nav>
            <h1>portfolio.</h1>
            <ul className="desktop">
                <li><a href="#" className={nav === '#' ? 'active' : ''} onClick={() => setNav('#')}>home</a></li>
                <li><a href="#about" className={nav === '#about' ? 'active' : ''} onClick={() => setNav('#about')}>about</a></li>
                <li><a href="#services" className={nav === '#services' ? 'active' : ''} onClick={() => setNav('#services')}>services</a></li>
                <li><a href="#lastest" className={nav === '#lastest' ? 'active' : ''} onClick={() => setNav('#lastest')}>trending NFT</a></li>
                <li><a href="#contact" className={nav === '#contact' ? 'active' : ''} onClick={() => setNav('#contact')}>contact</a></li>
            </ul>
            <BiMenuAltRight onClick={toggleNav} className="menu" />
            {displayNav && <div className="phone--container">
                <ul className="phone">
                    <li><a href="#" className={nav === '#' ? 'active' : ''} onClick={() => path('#')}>home</a></li>
                    <li><a href="#about" className={nav === '#about' ? 'active' : ''} onClick={() => path('#about')}>about</a></li>
                    <li><a href="#services" className={nav === '#services' ? 'active' : ''} onClick={() => path('#services')}>services</a></li>
                    <li><a href="#lastest" className={nav === '#lastest' ? 'active' : ''} onClick={() => path('#lastest')}>trending NFT</a></li>
                    <li><a href="#contact" className={nav === '#contact' ? 'active' : ''} onClick={() => path('#contact')}>contact</a></li>
                </ul>
            </div>}
        </nav>
    );
}
 
export default Nav;