import { CreditCard, HelpCircle, Lock } from 'lucide-react';
import { useState } from 'react';

const CardDetail = ({ handleNextStep, handlePrevStep }) => {
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        nameOnCard: '',
        expirationDate: '',
        cvv: '',
        paymentMethod: 'creditCard', // Default payment method
        saveDetails: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handlePaymentMethodChange = (e) => {
        setCardDetails((prevDetails) => ({
            ...prevDetails,
            paymentMethod: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation logic if needed, for example:
        if (cardDetails.cardNumber.length < 16) {
            alert('Please enter a valid card number.');
            return;
        }
        if (cardDetails.cvv.length < 3) {
            alert('Please enter a valid CVV.');
            return;
        }
        // Proceed to next step
        handleNextStep();
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <div className="flex items-center mb-4">
                        <CreditCard className="mr-2 text-blue-600 h-6 w-6" />
                        <h2 className="text-lg font-medium">Credit Card / Debit Card</h2>
                        <div className="ml-auto flex space-x-2">
                            <img src="https://w7.pngwing.com/pngs/308/426/png-transparent-visa-logo-credit-card-visa-logo-payment-visa-blue-text-trademark-thumbnail.png" alt="Visa" className="h-6" />
                            <img src="https://w7.pngwing.com/pngs/962/794/png-transparent-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text-heart-thumbnail.png" alt="Mastercard" className="h-6" />
                            <img src="https://w7.pngwing.com/pngs/150/600/png-transparent-bank-card-payment-rupay-payment-method-icon-thumbnail.png" alt="RuPay" className="h-6" />
                            <span className="text-gray-400 text-sm">and more...</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={cardDetails.cardNumber}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                aria-label="Card Number"
                                required
                            />
                            <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        </div>

                        <input
                            type="text"
                            name="nameOnCard"
                            placeholder="Name on card"
                            value={cardDetails.nameOnCard}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            aria-label="Name on Card"
                            required
                        />

                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="expirationDate"
                                    placeholder="Expiration Date (MM / YY)"
                                    value={cardDetails.expirationDate}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                    aria-label="Expiration Date"
                                    required
                                />
                            </div>
                            <div className="w-24 relative">
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="CVV"
                                    value={cardDetails.cvv}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                    aria-label="CVV"
                                    required
                                />
                                <HelpCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 mb-6">

                    <div className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md">
                        <input
                            type="radio"
                            id="paypal"
                            name="paymentMethod"
                            value="paypal"
                            checked={cardDetails.paymentMethod === 'paypal'}
                            onChange={handlePaymentMethodChange}
                            aria-label="PayPal"
                        />
                        <img src="https://w7.pngwing.com/pngs/856/570/png-transparent-paypal-friends-without-a-border-logo-business-paypal-blue-image-file-formats-text.png" alt="PayPal" className="h-6" />
                        <label htmlFor="paypal" className="text-sm">PayPal</label>
                    </div>

                    <div className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md">
                        <input
                            type="radio"
                            id="upi"
                            name="paymentMethod"
                            value="upi"
                            checked={cardDetails.paymentMethod === 'upi'}
                            onChange={handlePaymentMethodChange}
                            aria-label="UPI"
                        />
                        <div className="flex space-x-2">
                            <label alt="UPI" className="h-6" >BHIM/UPI</label>
                            <img src="https://w7.pngwing.com/pngs/850/508/png-transparent-google-pay-send-online-wallet-mobile-payment-mobile-pay-text-trademark-payment.png" alt="Google Pay" className="h-6" />
                            <img src="https://w7.pngwing.com/pngs/345/591/png-transparent-phonepe-hd-logo.png" alt="PhonePe" className="h-6" />
                            <img src="https://w7.pngwing.com/pngs/827/101/png-transparent-paytm-logo-online-payment-brand-flat-icon.png" alt="Paytm" className="h-6" />
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="saveDetails"
                            checked={cardDetails.saveDetails}
                            onChange={() => setCardDetails(prev => ({ ...prev, saveDetails: !prev.saveDetails }))}
                            className="mr-2"
                            aria-label="Save payment details"
                        />
                        <span className="text-sm text-gray-600">Save payment details for future purchase</span>
                    </label>
                </div>

                <div className="flex justify-between items-center">
                    <button
                        type="button"
                        onClick={handlePrevStep}
                        className="text-blue-600 flex items-center"
                    >
                        <span className="mr-2">←</span>Go Back
                    </button>
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
                        <Lock className="mr-2 h-4 w-4" /> Confirm and Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CardDetail;
