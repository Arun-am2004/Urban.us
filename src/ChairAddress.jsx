// ChairAddress.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

const ChairAddress = () => {
    const location = useLocation();
    const { selectedOption } = location.state || {};

    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [checkoutDetails, setCheckoutDetails] = useState(null);

    const handleCheckout = () => {
        if (!streetName || !city || !state || !pincode) {
            alert('Please fill in all address fields.');
            return;
        }

        const address = `${streetName}, ${city}, ${state}, ${pincode}`;
        const price = selectedOption === 'rent' ? 'Price based on selected tenure' : '$250';
        setCheckoutDetails(`Selected Option: ${selectedOption.toUpperCase()}. Total Price: ${price}. Address: ${address}`);
    };

    return (
        <div className="details-box">
            <h1>Chair {selectedOption && selectedOption.toUpperCase()} - Address Details</h1>

            <div className="address-input-section">
                <label>Street Name:</label>
                <input
                    type="text"
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                    placeholder="Enter Street Name"
                    className="address-input"
                />

                <label>City:</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
                    className="address-input"
                />

                <label>State:</label>
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Enter State"
                    className="address-input"
                />

                <label>Pincode:</label>
                <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                    className="address-input"
                />
            </div>

            <div className="checkout-section">
                <button onClick={handleCheckout} className="checkout-button">Checkout</button>
            </div>

            {checkoutDetails && (
                <div className="checkout-details">
                    <h3>Checkout Details:</h3>
                    <p>{checkoutDetails}</p>
                </div>
            )}
        </div>
    );
};

export default ChairAddress;
