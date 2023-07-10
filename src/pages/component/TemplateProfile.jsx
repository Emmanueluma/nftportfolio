const TemplateProfile = ( {key, image, name, random, profile, eth} ) => {
  return (
    <article className='nft-image-container' key={key}>
        <img src={image} alt="nft-ape1" />
        <div className="user">
                <div>
                    <img src={profile} className='profile' alt="a;j" />
                </div>
                <div className='text'>
                    <h4>{name}</h4>
                    <small>{random}</small>
                </div>
                <div>
                    <img className='eth' src={eth} alt="sdf" />
                </div>
            </div>
    </article>
  )
}

export default TemplateProfile
