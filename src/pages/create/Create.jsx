import './create.css'
import {BsWallet} from 'react-icons/bs'
import {TbFileUpload} from 'react-icons/tb'
import { GoTasklist }from 'react-icons/go'
import { useState, useEffect, useRef} from 'react'

const Create = () => {
    const cRef = useRef();
    const [cVisible, setCVisible] = useState(false);
    const c1Ref = useRef();
    const [c1Visible, setC1Visible] = useState(false);
    const c2Ref = useRef();
    const [c2Visible, setC2Visible] = useState(false);

    useEffect(() => {
        const Option = {
            threshold: 0.7
        }
        
        const cObserver = new IntersectionObserver((entry, cObserver)=> {
            if(entry[0].isIntersecting === true){
                setCVisible(entry[0].isIntersecting);
                cObserver.unobserve(cRef.current)
            }
        }, Option)
        cObserver.observe(cRef.current)
        const c1Observer = new IntersectionObserver((entry, c1Observer)=> {
            if(entry[0].isIntersecting === true){
                setC1Visible(entry[0].isIntersecting);
                c1Observer.unobserve(c1Ref.current)
            }
        }, Option)
        c1Observer.observe(c1Ref.current)
        const c2Observer = new IntersectionObserver((entry, c2Observer)=> {
            if(entry[0].isIntersecting === true){
                setC2Visible(entry[0].isIntersecting);
                c2Observer.unobserve(c2Ref.current)
            }
        }, Option)
        c2Observer.observe(c2Ref.current)

    },[])

  return (
    <section className="create" id="create">
        <h1 className='header-h1'>create and sell your <span>NFTs</span></h1>
        <div className="flex-continer">
            <article ref={cRef} className={`flex-item one ${cVisible && "inter"}`}>
                <BsWallet className='icon'/>
                <h3>set up your wallet</h3>
                <p>
                    once you've set up your wallet of choice,
                    connect it to OpenSea by clicking the wallet icon in 
                    the top right corner. learn about the wallet we support
                </p>
            </article>
            <article ref={c1Ref} className={`flex-item one ${c1Visible && "inter"}`}>
                <TbFileUpload className='icon'/>
                <h3>Upload & create collection</h3>
                <p>
                    upload your work then click my collections and set up your collection
                    , add social links, a description, profile & banner images, and set a secondary sales fee.
                </p>
            </article>
            <article ref={c2Ref} className={`flex-item one ${c2Visible && "inter"}`}>
                <GoTasklist className='icon'/>
                <h3>list them for sale</h3>
                <p>
                    choose between auctions, fiwed-price listings, and declining-price listings, you choose how you
                    want your NFTs, and we help you sell them
                </p>
            </article>
        </div>
    </section>
  )
}

export default Create
