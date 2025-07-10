'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentOption: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I want to enroll in the Data Analytics course.
    
Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Payment Option: ${formData.paymentOption}

Please guide me through the enrollment process.`;

    const whatsappUrl = `https://wa.me/918299708052?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      paymentOption: ''
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Secure Your Enrollment" size="md">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6 border border-green-200">
        <p className="text-green-800 font-semibold text-lg">🎉 Special Price: ₹29,999</p>
        <p className="text-green-600 text-sm">Save ₹15,000 from original price</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>
        
        <div>
          <select
            name="paymentOption"
            value={formData.paymentOption}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          >
            <option value="">Select Payment Option</option>
            <option value="Full Payment (₹29,999)">Full Payment (₹29,999)</option>
            <option value="EMI - ₹2,500/month (12 months)">EMI - ₹2,500/month (12 months)</option>
            <option value="EMI - ₹5,000/month (6 months)">EMI - ₹5,000/month (6 months)</option>
          </select>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 text-sm font-semibold mb-2">
            🛡️ What's Included:
          </p>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• 16 weeks of intensive training</li>
            <li>• Live project experience</li>
            <li>• Industry certification</li>
            <li>• Career placement assistance</li>
            <li>• Lifetime community access</li>
            <li>• 7-day money-back guarantee</li>
          </ul>
        </div>
        
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white"
            disabled={!formData.fullName || !formData.email || !formData.phone || !formData.paymentOption}
          >
            Proceed to Payment
          </Button>
          <Button
            type="button"
            onClick={onClose}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EnrollmentModal;
