import React from 'react';
import './Header.css';
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="breadcrumb">
                <span>Home</span> &gt; <span>Dashboard V2</span>
            </div>
            <div className="header-right">
                <div className="search-bar">
                    <FaSearch />
                    <input type="text" placeholder="Search anything..." />
                </div>
                <div className="icons">
                    <FaBell />
                    <div className="profile">
                        <span>Profile</span>
                        <FaChevronDown />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
