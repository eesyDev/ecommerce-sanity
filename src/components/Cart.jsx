import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../utils/client';

const Cart = () => {
  const { setShowCart, cartItems } = useStateContext();
  console.log(cartItems)
  return (
    <div className='cart-wrapper'>
      <div className="cart-container">
        <button className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineRight/>
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">5</span>
        </button>
        <div className="product-container">
          {
            cartItems?.length >=1 && 
            cartItems?.map(product => (
              <div className="product">
                {product?.image && <img src={urlFor(product.image[0])} alt="" className='cart-product-image'/>}
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{product?.name}</h5>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Cart