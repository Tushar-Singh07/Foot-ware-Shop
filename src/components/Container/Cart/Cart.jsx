import React, { useState } from 'react';
import ShippingAddress from './ShippingAddress';
import CartData from './CartData';
import CardDetail from './CardDetail';

const Cart = () => {
    const [step, setStep] = useState(1); // 1: Cart Summary, 2: Address, 3: Payment

    const handleNextStep = () => {
        setStep(prev => prev + 1);
    };

    const handlePrevStep = () => {
        setStep(prev => prev - 1);
    };

    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                <div className="mb-6 flex items-center justify-around">
                    {[1, 2, 3].map(i => (
                        <span key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold 
                            ${i <= step ? "bg-purple-600" : "bg-gray-300"}`}>
                            {i}
                        </span>
                    ))}
                </div>

                {/* Step 1: Cart Summary */}
                {step === 1 && (
                    <CartData handleNextStep={handleNextStep} />
                )}

                {/* Step 2: Address */}
                {step === 2 && (
                    <ShippingAddress handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                    <CardDetail handlePrevStep={handlePrevStep} />
                )}
            </div>
        </div>
    );
};

export default Cart;
