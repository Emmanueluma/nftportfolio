import './create.css'
import {BsWallet} from 'react-icons/bs'
import {TbFileUpload} from 'react-icons/tb'
import { GoTasklist }from 'react-icons/go'
const Create = () => {
  return (
    <section className="create" id="create">
        <h1 className='header-h1'>create and sell your <span>NFTs</span></h1>
        <div className="flex-continer">
            <article className="flex-item">
                <BsWallet className='icon'/>
                <h3>set up your wallet</h3>
                <p>
                    once you've set up your wallet of choice,
                    connect it to OpenSea by clicking the wallet icon in 
                    the top right corner. learn about the wallet we support
                </p>
            </article>
            <article className="flex-item">
                <TbFileUpload className='icon'/>
                <h3>Upload & create collection</h3>
                <p>
                    upload your work then click my collections and set up your collection
                    , add social links, a description, profile & banner images, and set a secondary sales fee.
                </p>
            </article>
            <article className="flex-item">
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
