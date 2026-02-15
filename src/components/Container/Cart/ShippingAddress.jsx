import React, { useState } from 'react';
import { ChevronDown, ChevronLeft } from 'lucide-react';

const ShippingAddress = ({ handleNextStep, handlePrevStep }) => {
    const [saveInfo, setSaveInfo] = useState(false);
    const [formData, setFormData] = useState({
        country: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        postalCode: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation logic if needed
        console.log(formData);
        handleNextStep();
    };

    return (
        <div className="py-4">
            <h1 className="text-2xl font-bold">Shipping Address</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment, suite, etc. (optional)"
                        value={formData.apartment}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        required
                    />
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                        required
                    >
                        <option value="" disabled>Select Country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={handlePrevStep}
                        className="text-blue-600 flex items-center"
                    >
                        <span className="mr-2">←</span>Go Back
                    </button>
                    <button type="submit" className="bg-purple-600 text-white p-2 rounded">Continue to Payment</button>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddress;
