import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../utils/client';

const Product = ({ image, name, price, slug }) => {
    console.log(slug)
  return (
    <div>
        <Link to={`/product/${slug?.current}`}>
            <div className="product-card">
                {
                    image && <img src={urlFor(image[1])} alt={name} />
                }
                <p className="product-name">{name}</p>
                <div className="product-price">${price}</div>
            </div>
        </Link>
    </div>
  )
}

export default Product