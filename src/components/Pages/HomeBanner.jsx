import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <NavLink to="/sale" className="block w-full">
                <div className="bg-white p-6 md:p-12 rounded-lg shadow-2xl flex flex-col md:flex-row items-center max-w-4xl mx-auto hover:shadow-3xl transition-shadow duration-300 hover:bg-gray-100">
                    <div className="mb-6 md:mb-0 md:mr-8 flex-1 text-center md:text-left">
                        <p className="text-md sm:text-lg text-orange-600 uppercase tracking-wide mb-2">Summer Season Offer</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
                            Flat Up to 50% Off <br /> for Men’s
                        </h1>
                        <div className="flex justify-center md:justify-start items-center">
                            <div className="w-12 h-1 bg-orange-500 mr-4"></div>
                            <p className="text-md sm:text-lg text-gray-600">
                                Sale – <span className="text-orange-500 font-semibold">Up to 80% OFF</span> on Shoes
                            </p>
                        </div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="A pair of black sneakers with white soles"
                        className="w-64 h-auto md:w-80 rounded-lg shadow-lg"
                    />
                </div>
            </NavLink>
        </div>
    );
}

export default HomeBanner;
