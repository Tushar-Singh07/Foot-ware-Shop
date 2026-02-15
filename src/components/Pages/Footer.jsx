import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRss, FaSkype, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center px-4">
                {/* Social Media Links */}
                <div className="flex flex-wrap justify-center space-x-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="text-white hover:text-orange-500 transition">
                        <FaRss />
                    </a>
                    <a href="#" className="text-white hover:text-orange-500 transition">
                        <FaSkype />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
                        <FaInstagram />
                    </a>
                </div>

                {/* Logo */}
                <div className="mb-4 text-2xl md:text-3xl font-bold">
                <span className="text-orange-500">C</span>
                            <span className="text-white">ha</span>
                            <span className="text-orange-500">uh</span>
                            <span className="text-white">an</span>

                            <span className="text-white"> F</span>
                            <span className="text-orange-500">oot</span>
                            <span className="text-white">W</span>
                            <span className="text-orange-500">ear</span>
                </div>

                {/* Subscription Form */}
                <div className="mb-4 flex justify-center flex-wrap space-y-2 md:space-y-0">
                    <input
                        type="text"
                        className="p-2 w-full md:w-64 lg:w-1/3 mb-2 md:mb-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your email"
                    />
                    <button className="bg-orange-500 text-white p-2 w-full md:w-auto hover:bg-orange-600 transition">SUBSCRIBE</button>
                </div>

                {/* Navigation Links */}
                <div className="mb-4">
                    <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-white hover:text-orange-500 transition">Home</Link>
                        <span className="text-white">|</span>
                        <Link to="/shop" onClick={() => window.scrollTo(0, 0)} className="text-white hover:text-orange-500 transition">Shop</Link>
                        <span className="text-white">|</span>
                        <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)} className="text-white hover:text-orange-500 transition">About Us</Link>
                        <span className="text-white">|</span>
                        <Link
                            to="/contactus"
                            onClick={() => window.scrollTo(0, 0)}
                            className="text-white hover:text-orange-500 transition"
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-xs md:text-sm">
                    <p>Copyright © 2024 Chauhans Footwear, All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
