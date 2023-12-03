import React from 'react';
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import { deleteShoppingCart } from '../../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Order = ({cart, removeShoppingCart,children}) => {
    console.log(cart);
    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0
    for (const price of cart) {
        price.quantity = price.quantity || 1
        quantity = quantity + price.quantity
        totalPrice = totalPrice + price.price * price.quantity
        totalShipping = totalShipping + price.shipping
        console.log(totalPrice);
    }
    const tax = totalPrice * 10 / 100
    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='order'>
            <div className="order-container">
                <div className='order-content'>
                    <h2> Order summary</h2>
                    <p>Selected Item: ${quantity}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Total Shipping Charge: ${totalShipping}</p>
                    <p>tax: ${tax.toFixed(2)}</p>
                    <p>Grand Total: ${grandTotal.toFixed(2)}</p>

                </div>
                <div className='clear-cart' onClick={removeShoppingCart}>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon className='clear-delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Order;