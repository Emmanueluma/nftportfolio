import { useRef, useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import './nav.css'
import logo from '../../asset/Dinero black.jpg'
import {Link} from 'react-router-dom'


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
            <div className="img">
                <img src={logo} alt="logo" />
            </div>
            <ul className="desktop">
                <li><a href="#" className={nav === '#' ? 'active' : ''} onClick={() => setNav('#')}>home</a></li>
                <li><a href="#about" className={nav === '#about' ? 'active' : ''} onClick={() => setNav('#about')}>about</a></li>
                <li><a href="#services" className={nav === '#services' ? 'active' : ''} onClick={() => setNav('#services')}>services</a></li>
                <li><Link to='dineroli'>dinero library</Link></li>
                <li><a href="#question" className={nav === '#question' ? 'active' : ''} onClick={() => setNav('#question')}>join</a></li>
            </ul>
            <button onClick={toggleNav} className="menu">{ displayNav == false ? <BiMenuAltRight /> : <IoMdClose /> }</button>
            <div className={`phone--container ${displayNav && 'active'}`} >
                <ul className={`phone ${displayNav && 'active'}`}>
                    <li><a href="#" className={nav === '#' ? 'active' : ''} onClick={() => path('#')}>home</a></li>
                    <li><a href="#about" className={nav === '#about' ? 'active' : ''} onClick={() => path('#about')}>about</a></li>
                    <li><a href="#services" className={nav === '#services' ? 'active' : ''} onClick={() => path('#services')}>services</a></li>
                    <li><Link to='dineroli'>dinero library</Link></li>
                    <li><a href="#question" className={nav === '#question' ? 'active' : ''} onClick={() => path('#question')}>join</a></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Nav;