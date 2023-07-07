import './lastest.css'
import Nft1 from '../../asset/nft1.png'
import Nft2 from '../../asset/nft2.webp'
import Nft3 from '../../asset/nft3.jpg'
import Nft4 from '../../asset/nft4.jpg'
import Nft5 from '../../asset/nft5.png'
import Nft6 from '../../asset/nft6.jpg'
import Profile1 from '../../asset/profile1.jpg'
import Profile2 from '../../asset/profile2.png'
import Profile3 from '../../asset/profile3.png'
import Profile4 from '../../asset/profile4.jpg'
import Profile5 from '../../asset/profile5.jpg'
import Profile6 from '../../asset/profile6.jpg'
import Eth from '../../asset/eth.png'
import TemplateProfile from '../component/TemplateProfile'
const Lastest = () => {
    const data = [
        {
            id:1,
            image: Nft1,
            name: 'nicki scott',
            random: 'randomguy',
            profile: Profile1,
            eth: Eth
        },
        {
            id:2,
            image: Nft2,
            name: 'john mick',
            random: 'randomguy',
            profile: Profile2,
            eth: Eth
        },
        {
            id:3,
            image: Nft3,
            name: 'kalus mickealson',
            random: 'randomguy',
            profile: Profile3,
            eth: Eth
        },
        {
            id:4,
            image: Nft4,
            name: 'bobby snow',
            random: 'randomguy',
            profile: Profile4,
            eth: Eth
        },
        {
            id:5,
            image: Nft5,
            name: 'juice wrld',
            random: 'randomguy',
            profile: Profile5,
            eth: Eth
        },
        {
            id:6,
            image: Nft6,
            name: 'mary akor',
            random: 'randomguy',
            profile: Profile6,
            eth: Eth
        },
    ];
    const newData = data.map(item => {
        return(
            <TemplateProfile 
                key={item.id}
                image={item.image}
                name={item.name}
                random={item.random}
                profile={item.profile}
                eth={item.eth}
            />
        )
    })
  return (
    <section className="lastest" id="lastest">
        <h1 className='header-h1'>trending <span>nft</span></h1>
        <div className="nft-container">
            {newData}
        </div>
        <a href='#' className='btn'>see more</a>
    </section>
  )
}

export default Lastest
