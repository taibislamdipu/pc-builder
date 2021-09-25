import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container text-center ">
            <h1 className="website-title">PC Builder</h1>
            <input className=" w-50 ms-3" type="text" placeholder="Search..." />
            <h2 className="lh-lg">Total Budget: $74000</h2>
        </div>
    );
};

export default Header;