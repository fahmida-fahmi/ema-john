import React from 'react';
import './item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const OrderPageItem = ({item,deleteCart}) => {
    const {category,id, img, name,price, shipping} = item
    
    return (
        <div id={id}>
            <div className='item-container'>
                <img src={img} alt="" />
                <div className='item-details'>
                    <h1>{name}</h1>
                    <p>Price: <span> ${price}</span></p>
                    <p>Shipping Charge : 
                        <span> ${shipping}</span></p>
                </div>
                <button className='btn' onClick={()=>deleteCart(id)}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>

    );
};

export default OrderPageItem;