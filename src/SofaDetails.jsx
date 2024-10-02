// SofaDetails.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SofaDetails = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [rentDuration, setRentDuration] = useState(1); // Default to 1 month
    const navigate = useNavigate();

    // Prices for rent and buy
    const rentPricePerMonth = 50; // Example price per month for rent
    const buyPrice = 700; // Example price for buying

    const handleRentClick = () => {
        setSelectedOption('rent');
    };

    const handleBuyClick = () => {
        setSelectedOption('buy');
    };

    const handleNext = () => {
        if (!selectedOption) {
            alert('Please select Rent or Buy option.');
            return;
        }
        navigate('/sofa-address', { state: { selectedOption, rentDuration, totalPrice: selectedOption === 'rent' ? rentDuration * rentPricePerMonth : buyPrice } });
    };

    return (
        <div className="details-box">
            <h1>Sofa Details</h1>
            <div className="specifications">
                <h2>Description</h2>
                <p>The Urban Sofa is a stylish and comfortable piece of furniture perfect for any modern living room.</p>
            </div>

            <div className="purchase-options">
                <button onClick={handleRentClick} className={`rent-button ${selectedOption === 'rent' ? 'selected' : ''}`}>Rent</button>
                <button onClick={handleBuyClick} className={`buy-button ${selectedOption === 'buy' ? 'selected' : ''}`}>Buy</button>
            </div>

            {/* Display pricing information */}
            {selectedOption === 'rent' && (
                <div className="pricing-info">
                    <label>
                        Select Rent Duration (months): 
                        <input 
                            type="number" 
                            min="1" 
                            value={rentDuration} 
                            onChange={(e) => setRentDuration(parseInt(e.target.value))} 
                        />
                    </label>
                    <p>Total Rent Price: ${rentDuration * rentPricePerMonth}</p>
                </div>
            )}

            {selectedOption === 'buy' && (
                <div className="pricing-info">
                    <p>Buy Price: ${buyPrice}</p>
                </div>
            )}

            <div className="next-step">
                <button onClick={handleNext} className="next-button">Next</button>
            </div>
        </div>
    );
};

export default SofaDetails;
