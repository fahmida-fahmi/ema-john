import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/product';
import Order from '../Order/Order';
import { addToDb, getShoppingCart } from '../../../utilities/local';
import { deleteShoppingCart } from '../../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Shop = () => {
    const [products,setProducts] =  useState([])
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart()
        const saveCart = []
        for(const id in storedCart){
            const addProduct = products.find(product => product.id === id)
            console.log(addProduct);
            if(addProduct){
                const quantity = storedCart[id]
                addProduct.quantity =  quantity
                saveCart.push(addProduct)
            }
        }
        setCart(saveCart)
    },[products])
    const addToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    const removeShoppingCart = () =>{
        deleteShoppingCart()
        setCart([])
        
    }
    return (
        <div className='shop-container'>
            <div className="products-container" >
                {
                    products.map(product => 
                        <Product 
                        product = {product}
                        addToCart = {addToCart}
                        key = {product.id}
                        ></Product>
                        )
                }
            </div>
            
                <Order
                cart ={cart}
                removeShoppingCart ={removeShoppingCart}
                >
                    <Link to='/orders' className='btn-review'>
                        {/* < className=''> */}
                        Review Order
                        {/* </> */}
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </Order>
        </div>
    );
};

export default Shop;