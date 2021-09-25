import React from 'react';
import './Header.css';

const Header = () => {

    const reloadPage = () => {
        window.location.reload();
    }
    return (
        <div className="header-container text-center bg-success">
            <h1 onClick={reloadPage} className="website-title text-white">PC Builder</h1>
            <input className=" w-50 ms-3" type="text" placeholder="Search..." />
            <h2 className="lh-lg text-white">Total Budget: $74000</h2>
        </div>
    );
};

export default Header;