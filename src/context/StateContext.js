import React, { useState, useContext, createContext } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [qty, setQty] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) {
                return 1
            }
            return prevQty - 1
        })
    }

    const onAdd = (product, quantity) => {
        setCartItems(...cartItems, {...product});

        toast.success(`${product.name} added to cart`)
    }
    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                qty,
                setQty,
                incQty,
                decQty,
                onAdd,
                cartItems
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);