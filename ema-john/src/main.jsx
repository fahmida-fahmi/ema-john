import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}
from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Shop from './Components/shop/Shop.jsx'
import Login from './Components/Login/Login.jsx'
import Inventory from './Components/Inventory/Inventory.jsx'
import OrderPage from './Components/OrderPage/OrderPage.jsx'
import { cartProductsLoader } from '../utilities/cartComponent.js'
import Checkout from './Components/checkout/Checkout.jsx'



const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Header></Header>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          element: <OrderPage/>,
          loader: cartProductsLoader
          
        },
        {
          path: '/inventory',
          element: <Inventory/>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'checkout',
          element: <Checkout></Checkout>
        }
      ]
      
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
