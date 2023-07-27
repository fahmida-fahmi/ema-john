// import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav>
            <div className="header">
                <img src={logo} alt="" />    
            </div>  
            <div className="menu">
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manager Inventory</a>
                <a href="">Login</a>
            
            </div>
        </nav>
    );
};

export default Header;