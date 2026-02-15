import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Data from '../../../AllDemoData.json';
import ItemCard from '../../Pages/ItemCard';

const ProductDetail = () => {
    const { id, type } = useParams();
    const AllDataWithType = Data[type];
    const product = AllDataWithType ? AllDataWithType.find(data => data.id == id) : null;

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex > -1) {
            // Update the quantity if the product already exists in the cart
            cartItems[existingProductIndex].quantity += quantity;
        } else {
            // Add new product with quantity to cart
            cartItems.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        window.dispatchEvent(new Event('cartUpdated'));
        alert('Product added to cart!');
    };

    if (!product) {
        return <div className="text-center text-red-500">Product not found.</div>;
    }

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Left column - Product Images */}
                    <div>
                        <div className="mb-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto max-h-[400px] md:max-h-[600px] object-cover rounded-lg cursor-pointer"
                                onClick={() => openModal(product.image)}
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((idx) => (
                                <img
                                    key={idx}
                                    src="https://media.istockphoto.com/id/1276342010/photo/top-view-of-pair-of-brown-shoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=3rGNZTZj3UX_APm7UrnqQDrkdojt2QyWQCg4SjRzOQ4="
                                    alt={`Product thumbnail ${idx}`}
                                    className="w-full h-auto rounded cursor-pointer hover:opacity-75"
                                    onClick={() => openModal(product.image)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right column - Product Details */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">{product.name}</h1>
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                                {[...Array(product.rating)].map((_, star) => (
                                    <span key={star}>★</span>
                                ))}
                            </div>
                            <span className="ml-2 text-gray-500">(3 customer reviews)</span>
                        </div>
                        <div className="text-xl sm:text-2xl font-bold mb-4">{product.price}</div>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="mb-4">
                            <span className="text-green-600 font-semibold">868 in stock</span>
                        </div>

                        <div className="flex items-center mb-6 space-x-4">
                            <button
                                onClick={() => handleQuantityChange(-1)}
                                className="px-3 py-1 sm:px-4 sm:py-2 border rounded-l hover:bg-blue-600 hover:text-white transition duration-200"
                            >
                                -
                            </button>
                            <span className="px-3 py-1 sm:px-4 sm:py-2 border-t border-b">
                                {quantity}
                            </span>
                            <button
                                onClick={() => handleQuantityChange(1)}
                                className="px-3 py-1 sm:px-4 sm:py-2 border rounded-r hover:bg-blue-600 hover:text-white transition duration-200"
                            >
                                +
                            </button>
                            <button
                                onClick={handleAddToCart}
                                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded transition duration-200 hover:bg-blue-700"
                            >
                                Add to cart
                            </button>
                        </div>

                        <div className="flex flex-wrap space-x-4 mb-6">
                            <button className="flex items-center text-gray-600 hover:text-blue-600 transition duration-200">
                                <AiOutlineHeart size={20} className="mr-2" />
                                Add to wishlist
                            </button>
                            <button className="flex items-center text-gray-600 hover:text-blue-600 transition duration-200">
                                <AiOutlineShareAlt size={20} className="mr-2" />
                                Compare
                            </button>
                        </div>

                        <div className="border-t pt-4">
                            <div className="mb-2">
                                <span className="font-semibold">Categories:</span>
                                <span className="ml-2 text-blue-600">Footwear, Sports and Outdoors</span>
                            </div>
                            <div>
                                <span className="font-semibold">Tags:</span>
                                <span className="ml-2 text-blue-600">Shoes, Sport</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="mt-8 sm:mt-12">
                    <div className="border-b">
                        <div className="flex flex-wrap space-x-4 sm:space-x-8 overflow-auto">
                            {['description', 'additional information', 'reviews (3)'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-2 capitalize ${activeTab === tab ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500'
                                        } hover:text-blue-600 transition duration-200`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="py-4 sm:py-6">
                        {activeTab === 'description' && (
                            <div>
                                <h3 className="font-semibold mb-4">Product Description</h3>
                                <p className="text-gray-600 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                <h3 className="font-semibold mb-4">Unordered List</h3>
                                <ul className="list-disc pl-5 text-gray-600 mb-4">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Suspendisse ullamcorper ex eu massa mollis ullamcorper.</li>
                                    <li>Vestibulum sed mauris vel lectus rhoncus malesuada id tempus nibh.</li>
                                </ul>

                                <h3 className="font-semibold mb-4">Ordered List</h3>
                                <ol className="list-decimal pl-5 text-gray-600 mb-4">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Suspendisse ullamcorper ex eu massa mollis ullamcorper.</li>
                                    <li>Vestibulum sed mauris vel lectus rhoncus malesuada id tempus nibh.</li>
                                </ol>
                            </div>
                        )}

                        {activeTab === 'additional information' && (
                            <div>
                                <h3 className="font-semibold mb-4">Additional Information</h3>
                                <p className="text-gray-600 mb-4">Here you can add more details about the product, such as dimensions, weight, and material.</p>
                            </div>
                        )}

                        {activeTab === 'reviews (3)' && (
                            <div>
                                <h3 className="font-semibold mb-4">Customer Reviews</h3>
                                <p className="text-gray-600 mb-4">Here are some reviews from customers.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Modal for image */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <img src={selectedImage} alt="Product" className="w-full h-auto max-h-[600px] object-cover" />
                            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <ItemCard Products={AllDataWithType} Headding={"Related Products"} />
        </div>
    );
};

export default ProductDetail;
