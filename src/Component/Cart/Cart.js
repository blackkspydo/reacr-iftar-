import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    const [item, setItem] = useState(0)
    const randomPick = () => {
        const newItem = cart[Math.floor(Math.random() * cart.length)];
        // console.log(item)
        setItem(newItem)
    }



    console.log(item)
    // console.log(cart[item])
    return (
        <div className='cart'>
            <h3>Selected Items</h3>
            {cart.map(product => <li>{product.name}</li>)}
            {
                item && <h1>{item.name}</h1>
            }
            <button onClick={randomPick}>choose randomly</button>

            <button>reset</button>
        </div >
    );
};

export default Cart;