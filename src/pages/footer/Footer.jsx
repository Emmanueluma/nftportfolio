import './footer.css'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
const Footer = () => {
    return ( 
        <footer className='maxWidth'>
            <small>created by <a href="https://webrug.pages.dev"> emmanuel uma</a></small>
            <a className='a' href="#home"><BsFillArrowUpSquareFill /></a>
        </footer>
     );
}
 
export default Footer;