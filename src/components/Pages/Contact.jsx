import React from 'react';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
            {/* Background image placeholder - replace with actual image URL */}
            <div className="absolute right-0 top-0 w-1/2 h-full">
                <img
                    src="https://media.istockphoto.com/id/1473452525/photo/human-crowd-waiting-before-glowing-at-symbol.jpg?s=612x612&w=0&k=20&c=lVnrKomWu-GjMFCP3r0AqDlhYEaHjGfbcKMwMzIL44Q=" // Placeholder image for demo
                    alt="Office workspace"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Orange decorative shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold mb-4">Get in touch</h1>
                    <p className="text-xl text-gray-300 mb-12">
                        Want to get in touch? We'd love to hear from you. Here's how you can reach us.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Sales Card */}
                        <div className="bg-white text-slate-800 p-8 rounded-lg shadow-lg">
                            <div className="flex justify-center mb-6">
                                <FiPhone size={32} className="text-slate-700" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mb-4">Talk to Sales</h2>
                            <p className="text-center text-gray-600 mb-6">
                                Interested in Chauhans Footwear? Just pick up the phone to chat with a member of our sales team.
                            </p>
                            <div className="text-center">
                                <a href="tel:+918709792019" className="text-blue-600 font-semibold text-lg block mb-4">
                                    +918709792019
                                </a>
                                <button className="text-blue-600 hover:bg-gray-100 font-medium rounded px-2 py-1 transition-colors">
                                    View all global numbers
                                </button>
                            </div>
                        </div>

                        {/* Support Card */}
                        <div className="bg-white text-slate-800 p-8 rounded-lg shadow-lg">
                            <div className="flex justify-center mb-6">
                                <FiMessageCircle size={32} className="text-slate-700" />
                            </div>
                            <h2 className="text-xl font-semibold text-center mb-4">Contact Customer Support</h2>
                            <p className="text-center text-gray-600 mb-6">
                                Sometimes you need a little help from your friends. Or a Chuahan Footwear support rep. Don't worry... we're here for you.
                            </p>
                            <div className="text-center">
                                <a
                                    className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors"
                                    href="www.linkedin.com/in/tushar-kumar-singh-a42116283"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
