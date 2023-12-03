import React from 'react';
import './Proudct.css'
import cart from '../../../images/cart-plus.png'

const Product = (props) => {
    const {id, img, name, seller, price, ratings } = props.product
    const addToCart = props.addToCart
    return (
        <div>
            <div className='card'>
                    <div className='card-img card-body' >
                        <img src={img} alt="" />
                    </div>
                    <div className='card-content card-body'>
                        <h2 style={{fontSize:"21px", fontWeight:'400'}}>{name}</h2>
                        <p>Price: ${price}</p>
                        <div className='additional-info'>
                            <p>Manufacturer : {seller}</p>
                            <p>Rating : {ratings} star</p>
                        </div>
                    </div>
                    <button className='btn' onClick={()=> addToCart(props.product)}>Add to Cart <img src={cart} alt="" /></button>
            </div>
        </div>
    );
};

export default Product;