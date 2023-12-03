// import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import { Link, Outlet } from 'react-router-dom';
const Header = () => {
    return (
        <div>

        <nav>
            <div className="header">
                <img src={logo} alt="" />    
            </div>  
            <div className="menu">
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Manager Inventory</Link>
                <Link to="/login">Login</Link>
            
            </div>
        </nav>
            <Outlet></Outlet>
        </div>

    );
};

export default Header;