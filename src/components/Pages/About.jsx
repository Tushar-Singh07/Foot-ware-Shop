import React from 'react';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-b from-white via-neutral-50 to-gray-100 text-gray-800">
            {/* Main content container */}
            <div className="flex flex-col items-center space-y-12">
                {/* Shoe image */}
                <div className="flex justify-center">
                    <img
                        src="https://t3.ftcdn.net/jpg/08/00/40/76/240_F_800407654_t7TTsH9EEe8fEEOEyPvJQrWieVM7Bqg4.jpg"
                        alt="Minimalist sneaker by Chauhans Footwear"
                        className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Simplicity feature */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-semibold uppercase tracking-widest text-gray-900">
                            Simplicity in Design
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            No flashy logos. No unnecessary details. Chauhans Footwear comfortable shoes are crafted naturally and designed practically—simply for you.
                        </p>
                    </div>

                    {/* Confidence feature */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-semibold uppercase tracking-widest text-gray-900">
                            Confidence in Comfort
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Step with certainty. Try Chauhans Footwear shoes for 30 days, and if they don’t feel like walking on clouds, return them—no questions asked.
                        </p>
                    </div>

                    {/* Nature feature */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-semibold uppercase tracking-widest text-gray-900">
                            Made from Nature
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We prioritize nature’s resources over synthetic alternatives to create quality footwear. At Chauhans Footwear, we’re making a shift to sustainable materials.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
