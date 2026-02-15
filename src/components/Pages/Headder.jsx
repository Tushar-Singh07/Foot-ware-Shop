import React, { useState, useEffect } from 'react';
import { FaSearch, FaPhoneAlt, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function Headder() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartLength, setCartLength] = useState(0);

    const updateCartLength = () => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCartLength(cartData.length);
    };

    useEffect(() => {
        // Initialize cart length on mount
        updateCartLength();

        // Listen for custom `cartUpdated` event
        const handleCartUpdate = () => {
            updateCartLength();
        };

        window.addEventListener('cartUpdated', handleCartUpdate);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdate);
        };
    }, []);

    const navLinks = ['Home', 'Shop', "Featured", "Latest", "Best Seller", 'About Us', 'Contact Us'];

    return (
        <div>
            {/* Header Section */}
            <header className="bg-gray-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-4 px-6 md:py-6">
                    {/* Logo */}
                    <div className="text-3xl font-bold flex items-center w-full md:w-auto mb-4 md:mb-0 tracking-wide">
                        <Link to={"/home"}>
                            <span className="text-orange-500">C</span>
                            <span className="text-white">ha</span>
                            <span className="text-orange-500">uh</span>
                            <span className="text-white">an</span>

                            <span className="text-white"> F</span>
                            <span className="text-orange-500">oot</span>
                            <span className="text-white">W</span>
                            <span className="text-orange-500">ear</span>
                        </Link>

                        {/* Hamburger Menu for Mobile */}
                        <button
                            aria-label="Toggle menu"
                            className="text-2xl md:hidden ml-auto"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Desktop Search */}
                    <div className={`flex items-center w-full md:w-auto mb-4 md:mb-0 relative ${isSearchOpen ? '' : 'hidden md:flex'}`}>
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-gray-800 text-white pl-6 pr-14 py-3 rounded-md w-full md:w-96 lg:w-[28rem] text-lg focus:outline-none placeholder-gray-400"
                        />
                        <button
                            aria-label="Search"
                            className="absolute right-0 top-0 h-full bg-orange-500 text-white px-4 py-3 rounded-r-md hover:bg-orange-600 transition-colors"
                        >
                            <FaSearch />
                        </button>
                    </div>

                    {/* Contact Info */}
                    <div className="hidden md:flex items-center text-lg md:text-xl space-x-2">
                        <FaPhoneAlt className="mr-2" aria-hidden="true" />
                        <span className="hover:text-orange-500 transition-colors">Call Us (+91) 8709792019</span>
                    </div>
                </div>
            </header>

            {/* Navigation Section */}
            <nav className="bg-gray-100 text-black font-medium shadow-md">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-3 px-4 md:py-5 md:px-6">
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center justify-between w-full">
                        <div className="flex space-x-4 md:space-x-8 text-lg">
                            {navLinks.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={`/${item.toLowerCase().replace(/\s/g, '')}`}
                                    className={({ isActive }) =>
                                        isActive ? 'text-orange-500' : 'hover:text-orange-500 transition-colors'
                                    }
                                >
                                    {item}
                                </NavLink>
                            ))}
                        </div>

                        {/* Profile and Cart */}
                        <div className="flex items-center space-x-6">
                            <NavLink to="/profile" className="cursor-pointer hover:text-orange-500 transition-colors">
                                <FaUser className="text-2xl" aria-label="Profile" />
                            </NavLink>
                            <NavLink to="/cart" className="flex items-center cursor-pointer hover:text-orange-500 transition-colors">
                                <FaShoppingCart className="text-2xl" aria-label="Cart" />
                                <span className="bg-orange-500 text-white rounded-full px-2 py-1 ml-1 text-sm font-semibold">{cartLength}</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-2xl text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FaTimes />
                            </button>

                            {/* Mobile Search */}
                            <div className="flex items-center w-full mb-4 mt-16 relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="bg-gray-800 text-white pl-6 pr-14 py-3 rounded-md w-full text-lg focus:outline-none placeholder-gray-400"
                                />
                                <button
                                    aria-label="Search"
                                    className="absolute right-0 top-0 h-full bg-orange-500 text-white px-4 py-3 rounded-r-md hover:bg-orange-600 transition-colors"
                                >
                                    <FaSearch />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="flex flex-col items-center w-full space-y-2">
                                {navLinks.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={`/${item.toLowerCase().replace(/\s/g, '')}`}
                                        className={({ isActive }) =>
                                            isActive ? 'text-orange-500' : 'hover:text-orange-500 transition-colors'
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Profile and Cart */}
                            <div className="flex flex-col items-center w-full space-y-4 mt-4">
                                <NavLink
                                    to="/profile"
                                    className="cursor-pointer hover:text-orange-500 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FaUser className="text-2xl" aria-label="Profile" />
                                </NavLink>
                                <NavLink
                                    to="/cart"
                                    className="flex items-center cursor-pointer hover:text-orange-500 transition-colors ml-5"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FaShoppingCart className="text-2xl" aria-label="Cart" />
                                    <span className="bg-orange-500 text-white rounded-full px-2 py-1 ml-2 text-sm font-semibold">{cartLength}</span>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Headder;
