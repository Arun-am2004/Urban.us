// Body.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Body = () => {
    const products = [
        { name: 'Sofa', path: '/sofa-details', image: 'sofa.jpg' },
        { name: 'Chair', path: '/chair-details', image: '/assets/chair.jpg' },
        { name: 'Table', path: '/table-details', image: '/assets/table.jpg' },
        { name: 'Bed', path: '/bed-details', image: 'bed.jpg' },
        { name: 'Wardrobe', path: '/wardrobe-details', image: 'wardrobe.jpg' },
        { name: 'Dining Set', path: '/dining-set-details', image: 'diningset.jpg' },
    ];

    return (
        <div className="body-container">
            <div className="tiles-container">
                {products.map((product, index) => (
                    <Link to={product.path} key={index} className="tile">
                        <img src={product.image} alt={product.name} className="tile-image" />
                        <div className="tile-name">{product.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
