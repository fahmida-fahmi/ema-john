import React, { useState } from 'react';
import Order from '../Order/Order';
import { Link, useLoaderData } from 'react-router-dom';
import OrderPageItem from '../orderPageItem/OrderPageItem';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const OrderPage = () => {
    const product = useLoaderData()
    const [cart, setCart] = useState(product)
    const removeShoppingCart = () =>{
        setCart([])
        deleteShoppingCart()
    }
    const deleteCart = id =>{
        console.log(id);
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    return (
        <div className='review-grid'>
            <div className="review-container" >
                {
                    cart.map(el => <OrderPageItem
                        key={el.id}
                        item = {el}
                        deleteCart ={deleteCart}
                    ></OrderPageItem>)
                }
            </div>
            
                <Order className='order-summary-page'
                cart ={cart}
                removeShoppingCart ={removeShoppingCart}
                >
                    <Link to='/checkout' className='btn-review'>
                        Proceed Order
                        <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                    </Link>
                </Order>
        </div>
    );
};

export default OrderPage;