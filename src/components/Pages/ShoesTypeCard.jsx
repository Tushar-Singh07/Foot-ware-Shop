import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ShoesTypeCard = () => {
    return (
        <div className="flex justify-center items-start bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-screen-lg">
                {/* Sport Shoes Card */}
                <Link to="/sport" className="bg-white rounded-lg shadow-lg flex flex-row items-center p-6 transition-colors duration-300 ease-in-out hover:bg-gray-200">
                    <div className="flex flex-col justify-between w-2/3 pr-4">
                        <p className="text-gray-500 text-sm mb-1">Season Offer</p>
                        <h2 className="text-3xl font-bold text-black mb-4">FOR SPORT</h2>
                        <span className="text-orange-600 hover:underline font-semibold">DISCOVER MORE</span>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1518656306295-aa28b28b2504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0cyUyMHNob2V8ZW58MHx8MHx8fDA%3D"
                        alt="Black and white sports shoes"
                        className="w-1/3 h-40 object-cover rounded-md shadow"
                    />
                </Link>

                {/* Casual Shoes Card */}
                <Link to="/casual" className="bg-white rounded-lg shadow-lg flex flex-row items-center p-6 transition-colors duration-300 ease-in-out hover:bg-gray-200">
                    <div className="flex flex-col justify-between w-2/3 pr-4">
                        <p className="text-gray-500 text-sm mb-1">Season Offer</p>
                        <h2 className="text-3xl font-bold text-black mb-4">ALL CASUAL</h2>
                        <span className="text-orange-600 hover:underline font-semibold">DISCOVER MORE</span>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Black and white casual shoes"
                        className="w-1/3 h-40 object-cover rounded-md shadow"
                    />
                </Link>
            </div>
        </div>
    );
}

export default ShoesTypeCard;
