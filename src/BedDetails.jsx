// BedDetails.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const BedDetails = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

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
        navigate('/bed-address', { state: { selectedOption } });
    };

    return (
        <div className="details-box">
            <h1>Bed Details</h1>
            <div className="specifications">
                <h2>Description</h2>
                <p>The Urban Bed provides style and comfort, ensuring a restful sleep experience.</p>
            </div>

            <div className="purchase-options">
                <button onClick={handleRentClick} className={`rent-button ${selectedOption === 'rent' ? 'selected' : ''}`}>Rent</button>
                <button onClick={handleBuyClick} className={`buy-button ${selectedOption === 'buy' ? 'selected' : ''}`}>Buy</button>
            </div>

            <div className="next-step">
                <button onClick={handleNext} className="next-button">Next</button>
            </div>
        </div>
    );
};

export default BedDetails;
