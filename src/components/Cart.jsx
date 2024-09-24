import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

const Cart = () => {
  const { setShowCart } = useStateContext();
  return (
    <div className='cart-wrapper'>
      <div className="cart-container">
        <button className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineRight/>
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">5</span>
        </button>
      </div>
    </div>
  )
}

export default Cart