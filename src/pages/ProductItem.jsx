import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

import { client, urlFor } from '../utils/client';


const ProductItem = () => {
  const { slug } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`).then((data) => setProductDetail(data))
  }, []);

  const { image, pice, name } = productDetail;
  const { qty, setQty, incQty, decQty, onAdd } = useStateContext();
  console.log(productDetail)
  return (
    <div className='product-detail-container'>
      <div className="image-gallery">
        <div className="image-container">
          {
            image && <img src={urlFor(image && image[imageIndex])} alt="" className="product-detail-image" />
          }
        </div>
        <div className="small-image-container">
          {
            image && image?.map((img, i) => (
              <img key={i} src={urlFor(img)} alt="image" className={i === imageIndex ? 'selected-image small-image' : 'small-image'} onMouseEnter={() => setImageIndex(i)} />
            ))
          }
        </div>
      </div>
      <div className="product-detail-desc">
        <h1>{productDetail?.name}</h1>
        <div className="reviews">
          <div className="">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
          </div>
          <p>(16)</p>
        </div>
        <h4>Details:</h4>
        <p>{productDetail?.details}</p>
        <p className="price">${productDetail?.price}</p>
        <div className="quantity">
          <h3>Quantity</h3>
          <p className="quantity-desc">
            <span className="minus" onClick={decQty}>
              <AiOutlineMinus/>
            </span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={incQty}>
              <AiOutlinePlus/>
            </span>
          </p>
        </div>
        <div className="buttons">
          <button className='add-to-cart btn' onClick={() => onAdd(productDetail, qty)}>Add to cart</button>
          <button className='buy-now btn'>Buy Now</button>
        </div>
      </div>
      
    </div>
  )
}

export default ProductItem