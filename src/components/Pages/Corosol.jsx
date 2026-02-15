import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaShippingFast } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { FaGift } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const Corosol = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideContent = [
        {
            title: "FLAT UP TO 30% OFF",
            subtitle: "Summer Season Offer",
            discount: "27% Discount",
            imageUrl: "https://images.unsplash.com/photo-1555378322-2d4b84bc2790?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "EXCLUSIVE DEALS",
            subtitle: "Winter Collection Offer",
            discount: "30% Discount",
            imageUrl: "https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "NEW ARRIVALS",
            subtitle: "Spring Season Sale",
            discount: "25% Discount",
            imageUrl: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    return (
        <div className="flex flex-col items-center">
            {/* Main Heading */}
            <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4 p-5">Unlock Amazing Deals Today!</h1>


            <div className="relative w-full">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    className="w-full h-auto"
                    onChange={(index) => setCurrentSlide(index)} // Track the active slide
                    renderArrowPrev={(onClickHandler, hasPrev) =>
                        hasPrev && (
                            <button
                                onClick={onClickHandler}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-transparent border border-white px-3 py-1 rounded hover:bg-gray-700 hover:bg-opacity-50 z-10 mt-16 md:mt-0" // Make button transparent
                            >
                              Prev
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext) =>
                        hasNext && (
                            <button
                                onClick={onClickHandler}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-transparent border border-white px-3 py-1 rounded hover:bg-gray-700 hover:bg-opacity-50 z-10 mt-16 md:mt-0" // Make button transparent
                            >
                                Next
                            </button>
                        )
                    }
                >
                    {slideContent.map((slide, index) => (
                        <div key={index}>
                            <img src={slide.imageUrl} alt={`Offer ${index + 1}`} className="w-full h-96 object-cover" />
                        </div>
                    ))}
                </Carousel>
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 text-left text-white">
                    <p className="text-sm">{slideContent[currentSlide].subtitle}</p>
                    <h1 className="text-4xl font-bold">{slideContent[currentSlide].title}</h1>
                    <hr className="w-16 border-white my-4" />
                    <p className="text-lg">{slideContent[currentSlide].discount}</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-around w-full py-8 bg-white">
                <div className="flex flex-col items-center hover:text-orange-500 hover:bg-gray-200 transition-colors duration-300 p-4 rounded-lg cursor-pointer">
                    <i className="fas fa-shipping-fast text-2xl mb-2"><FaShippingFast /></i>
                    <p className="font-bold">FAST & FREE SHIPPING</p>
                    <p className="">On Order Over $90</p>
                </div>
                <div className="flex flex-col items-center hover:text-orange-500 hover:bg-gray-200 transition-colors duration-300 p-4 rounded-lg cursor-pointer">
                    <i className="fas fa-dollar-sign text-2xl mb-2"><TbMoneybag /></i>
                    <p className="font-bold">SAVE 20% WHEN YOU</p>
                    <p className="">Call +01 2334 600</p>
                </div>
                <div className="flex flex-col items-center hover:text-orange-500 hover:bg-gray-200 transition-colors duration-300 p-4 rounded-lg cursor-pointer">
                    <i className="fas fa-gift text-2xl mb-2"><FaGift /></i>
                    <p className="font-bold">ONLINE HELP SUPPORT</p>
                    <p className="">Sign Up For Gifts</p>
                </div>
                <div className="flex flex-col items-center hover:text-orange-500 hover:bg-gray-200 transition-colors duration-300 p-4 rounded-lg cursor-pointer">
                    <i className="fas fa-undo text-2xl mb-2"><GiReturnArrow /></i>
                    <p className="font-bold">14-DAY MONEY BACK</p>
                    <p className="">On Order Over $90</p>
                </div>
            </div>
        </div>
    );
}

export default Corosol;
