'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CounselingModal: React.FC<CounselingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    background: ''
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
    const message = `Hi! I would like to book a career counseling session.
    
Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Background: ${formData.background}

Please schedule a career counseling call for me.`;

    const whatsappUrl = `https://wa.me/918299708052?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      background: ''
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Career Counseling" size="md">
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
            name="background"
            value={formData.background}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          >
            <option value="">Select Your Current Background</option>
            <option value="Fresh Graduate">Fresh Graduate</option>
            <option value="Working Professional">Working Professional</option>
            <option value="Business Owner">Business Owner</option>
            <option value="Career Changer">Career Changer</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-green-800 text-sm">
            📞 <strong>Free Career Counseling includes:</strong>
          </p>
          <ul className="text-green-700 text-sm mt-2 space-y-1">
            <li>• Personalized career roadmap</li>
            <li>• Skills gap analysis</li>
            <li>• Industry insights and trends</li>
            <li>• Course recommendation</li>
            <li>• Salary expectations guidance</li>
          </ul>
        </div>
        
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            disabled={!formData.fullName || !formData.email || !formData.phone || !formData.background}
          >
            Schedule Call
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

export default CounselingModal;
