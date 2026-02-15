import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartData = ({ handleNextStep }) => {
    const [items, setItems] = useState([]);
    const [promoCode, setPromoCode] = useState('');
    const [isPromoValid, setIsPromoValid] = useState(false);
    const [promoFeedback, setPromoFeedback] = useState('');
    const shippingCost = 5.00;
    const discountAmount = 10.00; // Discount amount for valid promo code

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setItems(cartData);
    }, []);

    const handleQuantityChange = (id, amount) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    const handlePromoCode = () => {
        if (promoCode === "SAVE10") {
            setIsPromoValid(true);
            setPromoFeedback("Promo code applied successfully!");
        } else {
            setIsPromoValid(false);
            setPromoFeedback("Invalid promo code.");
        }
    };

    const handleRemoveItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const totalCost = items.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', '').replace(',', ''));
        return total + (price * item.quantity);
    }, 0);

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <h2 className="text-xl">{items.length} Items</h2>
            </div>
            <div className="md:flex">
                {/* Cart Items List */}
                <div className="w-full md:w-2/3 pr-6">
                    {items.length === 0 ? (
                        <div className="text-center">Your cart is empty.</div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row items-center md:justify-between mb-4 border-b pb-4">
                                <img src={item.image} alt={item.name} className="w-28 h-28 md:w-24 md:h-24 mr-4 mb-2 md:mb-0" />
                                <div className="flex-1 md:text-left text-center mb-2 md:mb-0">
                                    <h3 className="text-lg font-bold">{item.name}</h3>
                                    <button className="text-sm text-gray-500 mt-2" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                                <div className="flex items-center mt-2 md:mt-0">
                                    <button onClick={() => handleQuantityChange(item.id, -1)} className="text-lg px-2">-</button>
                                    <input type="text" value={item.quantity} readOnly className="w-12 text-center border mx-2" />
                                    <button onClick={() => handleQuantityChange(item.id, 1)} className="text-lg px-2">+</button>
                                </div>
                                <div className="w-20 text-center">£{parseFloat(item.price.replace('$', '')).toFixed(2)}</div>
                                <div className="w-20 text-center">£{(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</div>
                            </div>
                        ))
                    )}
                    <Link to="/home" className="text-purple-600 text-sm mt-4 block text-center">
                        <i className="fas fa-arrow-left"></i> Continue Shopping
                    </Link>
                </div>
                {/* Order Summary */}
                <div className="w-full md:w-1/3 mt-6 md:mt-0">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>ITEMS</span>
                            <span>{items.length}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>SHIPPING</span>
                            <span>£{shippingCost.toFixed(2)}</span>
                        </div>
                        {isPromoValid && (
                            <div className="flex justify-between mb-2 text-green-600">
                                <span>PROMO DISCOUNT</span>
                                <span>-£{discountAmount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between mb-4 font-bold text-lg">
                            <span>TOTAL COST</span>
                            <span>£{(totalCost + shippingCost - (isPromoValid ? discountAmount : 0)).toFixed(2)}</span>
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Promo Code"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                className="w-full p-2 border rounded mb-2"
                            />
                            <button onClick={handlePromoCode} className="w-full bg-purple-600 text-white p-2 rounded">Apply Promo Code</button>
                            {promoFeedback && <div className="text-red-600 text-sm mt-2">{promoFeedback}</div>}
                        </div>
                        <button onClick={handleNextStep} className="w-full bg-purple-600 text-white p-2 rounded mt-2">Continue to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartData;
