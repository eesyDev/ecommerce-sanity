import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../utils/client';

const HeroBanner = ({ smallText, midText, lgText, image, description }) => {
  return (
    <div className='hero-banner-container'>
      <div className="hero-banner">
        <p className='beats-solo'>{smallText}</p>
          <h3>{midText}</h3>
          <h1>{lgText}</h1>
          {
            image && <img src={urlFor(image)} alt="hero banner" className='hero-banner-image'/>
          }
          <Link><button className='btn'>Shop Now</button></Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{description}</p>
          </div>
      </div>
    </div>
  )
}

export default HeroBanner