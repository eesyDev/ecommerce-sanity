import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext'

const Header = () => {
    const {showCart, setShowCart} = useStateContext();

    console.log(showCart)
  return (
    <div className='navbar-container'>
        <Link to="/">
            TechnoShop
        </Link>
        <button className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping/>
            <span className='cart-item-qty'>2</span>
        </button>
        {
            showCart && <Cart/>
        }
    </div>
  )
}

export default Header