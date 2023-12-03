import { getShoppingCart } from "./local";

const cartProductsLoader = async () =>{
    try {
        const res = await fetch('products.json')
        const data = await res.json()
        const sortedCart = getShoppingCart()
        const saveCart = []
        console.log(sortedCart);
        for(const id in sortedCart){
            const addProduct = data.find(pd => pd.id === id)
            if(addProduct){
                    const quantity = sortedCart[id]
                    addProduct.quantity = quantity
                    saveCart.push(addProduct)
                }
        }
        return saveCart
    } catch (error) {
        console.log(error);
    }
    
}
export  {
    cartProductsLoader,
 
}