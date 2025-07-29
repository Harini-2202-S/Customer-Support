// src/components/StockEnquiryForm.js
import React, { useState } from 'react';
import './StockEnquiryForm.css';

const stockData = {
    'boat-1001': { name: 'Boat Airdopes 441', status: 'In Stock' },
    'boat-1002': { name: 'Boat Rockerz 255', status: 'Out of Stock' },
    'boat-1003': { name: 'Boat Stone 1000', status: 'Limited Stock' },
    'boat-1004': { name: 'Boat Nirvanaa Tres', status: 'In Stock' },
    'boat-1005': { name: 'Boat BassHeads 900', status: 'Out of Stock' },
    'ptron-2001': { name: 'Ptron Bassbuds Pro', status: 'Limited Stock' },
    'ptron-2002': { name: 'Ptron Tangent Lite', status: 'In Stock' },
    'ptron-2003': { name: 'Ptron Boom Ultima 4D', status: 'In Stock' },
    'ptron-2004': { name: 'Ptron InTunes Pro', status: 'Out of Stock' },
    'ptron-2005': { name: 'Ptron Pulsefit F21', status: 'In Stock' },
    'bose-3001': { name: 'Bose QuietComfort 35', status: 'In Stock' },
    'bose-3002': { name: 'Bose SoundSport', status: 'Out of Stock' },
    'bose-3003': { name: 'Bose SoundLink Revolve', status: 'In Stock' },
    'bose-3004': { name: 'Bose Frames Tenor', status: 'Limited Stock' },
    'bose-3005': { name: 'Bose Noise Cancelling Headphones 700', status: 'Out of Stock' },
    'sony-4001': { name: 'Sony WH-1000XM4', status: 'In Stock' },
    'sony-4002': { name: 'Sony WF-1000XM3', status: 'Out of Stock' },
    'sony-4003': { name: 'Sony SRS-XB12', status: 'In Stock' },
    'sony-4004': { name: 'Sony WI-C200', status: 'Limited Stock' },
    'sony-4005': { name: 'Sony WH-CH510', status: 'In Stock' },
    'jbl-5001': { name: 'JBL Flip 5', status: 'In Stock' },
    'jbl-5002': { name: 'JBL Charge 4', status: 'Out of Stock' },
    'jbl-5003': { name: 'JBL TUNE 500', status: 'In Stock' },
    'jbl-5004': { name: 'JBL Endurance Sprint', status: 'Limited Stock' },
    'jbl-5005': { name: 'JBL LIVE 650BTNC', status: 'In Stock' },
    'sennheiser-6001': { name: 'Sennheiser HD 450BT', status: 'In Stock' },
    'sennheiser-6002': { name: 'Sennheiser Momentum True Wireless 2', status: 'Out of Stock' },
    'sennheiser-6003': { name: 'Sennheiser CX 400BT', status: 'In Stock' },
    'sennheiser-6004': { name: 'Sennheiser HD 350BT', status: 'Limited Stock' },
    'sennheiser-6005': { name: 'Sennheiser PXC 550-II', status: 'In Stock' },
    // Add more products as needed
};

const StockEnquiryForm = () => {
    const [productId, setProductId] = useState('');
    const [stockStatus, setStockStatus] = useState(null);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all'); // 'all', 'inStock', 'outOfStock', 'limitedStock'

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = stockData[productId];
        if (product) {
            setStockStatus(product.status);
            setError(null);
        } else {
            setError('Product not found');
            setStockStatus(null);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredProducts = Object.keys(stockData).filter((key) => {
        if (filter === 'all') return true;
        if (filter === 'inStock' && stockData[key].status === 'In Stock') return true;
        if (filter === 'outOfStock' && stockData[key].status === 'Out of Stock') return true;
        if (filter === 'limitedStock' && stockData[key].status === 'Limited Stock') return true;
        return false;
    });

    return (
        <div className="enquiry-form">
            <h1>Stock Enquiry</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Product ID:
                    <input
                        type="text"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        placeholder="Enter product ID"
                    />
                </label>
                <button type="submit">Check Stock</button>
            </form>
            {stockStatus !== null && (
                <div className="status">
                    <p>{productId}: {stockStatus}</p>
                </div>
            )}
            <div className="filter">
                <label>Filter by Status:</label>
                <select value={filter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="inStock">In Stock</option>
                    <option value="outOfStock">Out of Stock</option>
                    <option value="limitedStock">Limited Stock</option>
                </select>
            </div>
            <div className="result">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((key) => (
                        <p key={key}>{stockData[key].name} - {stockData[key].status}</p>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
            {error && <p className="status error">{error}</p>}
        </div>
    );
};

export default StockEnquiryForm;
