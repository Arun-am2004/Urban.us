// Header.jsx
import React from 'react';
import './index.css';
import { FaSearch, FaCamera, FaTruck, FaStore, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <img src="Urban.us (1).png" alt="Logo" className="logo" />
            
            <div className="search-container">
                <FaSearch className="search-icon" />
                <input type="text" className="search-bar" placeholder="What are you looking for?" />
                <FaCamera className="camera-icon" />
            </div>

            <div className="header-options">
                <div className="option">
                    <FaTruck />
                    <span>Enter postal code</span>
                </div>
                <div className="option">
                    <FaStore />
                    <span>Select store</span>
                </div>
                <div className="option">
                    <FaUser />
                    <span>Hej! Log in</span>
                </div>
                <div className="option">
                    <FaHeart />
                </div>
                <div className="option">
                    <FaShoppingCart />
                </div>
            </div>
        </div>
    );
};

export default Header;
