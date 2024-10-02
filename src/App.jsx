// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import SofaDetails from './SofaDetails';
import ChairDetails from './ChairDetails';
import TableDetails from './TableDetails';
import BedDetails from './BedDetails';
import WardrobeDetails from './WardrobeDetails';
import DiningSetDetails from './DiningSetDetails';
import SofaAddress from './SofaAddress';
import ChairAddress from './ChairAddress';
import TableAddress from './TableAddress';
import BedAddress from './BedAddress';
import WardrobeAddress from './WardrobeAddress';
import DiningSetAddress from './DiningSetAddress';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/sofa-details" element={<SofaDetails />} />
                    <Route path="/chair-details" element={<ChairDetails />} />
                    <Route path="/table-details" element={<TableDetails />} />
                    <Route path="/bed-details" element={<BedDetails />} />
                    <Route path="/wardrobe-details" element={<WardrobeDetails />} />
                    <Route path="/dining-set-details" element={<DiningSetDetails />} />
                    <Route path="/sofa-address" element={<SofaAddress />} />
                    <Route path="/chair-address" element={<ChairAddress />} />
                    <Route path="/table-address" element={<TableAddress />} />
                    <Route path="/bed-address" element={<BedAddress />} />
                    <Route path="/wardrobe-address" element={<WardrobeAddress />} />
                    <Route path="/dining-set-address" element={<DiningSetAddress />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
