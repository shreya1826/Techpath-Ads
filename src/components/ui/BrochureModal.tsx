'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I would like to receive the detailed course brochure.
    
Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Please send me the complete course information and brochure.`;

    const whatsappUrl = `https://wa.me/918299708052?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      fullName: '',
      email: '',
      phone: ''
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Get Course Brochure" size="md">
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

        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-purple-800 text-sm font-semibold mb-2">
            📄 Brochure Includes:
          </p>
          <ul className="text-purple-700 text-sm space-y-1">
            <li>• Detailed curriculum breakdown</li>
            <li>• Instructor profiles and credentials</li>
            <li>• Student success stories</li>
            <li>• Pricing and payment options</li>
            <li>• Career placement statistics</li>
            <li>• Course schedule and timings</li>
          </ul>
        </div>
        
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
            disabled={!formData.fullName || !formData.email || !formData.phone}
          >
            Send Brochure
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

export default BrochureModal;
