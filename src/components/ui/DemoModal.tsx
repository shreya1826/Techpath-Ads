'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    timeSlot: ''
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
    const message = `Hi! I would like to book a free demo class.
    
Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Preferred Time: ${formData.timeSlot}

Please confirm my demo class booking.`;

    const whatsappUrl = `https://wa.me/918299708052?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      timeSlot: ''
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Free Demo Class" size="md">
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
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          >
            <option value="">Select Preferred Time Slot</option>
            <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
            <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
            <option value="6:00 PM - 7:00 PM">6:00 PM - 7:00 PM</option>
            <option value="8:00 PM - 9:00 PM">8:00 PM - 9:00 PM</option>
          </select>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 text-sm">
            📅 <strong>What you'll get:</strong>
          </p>
          <ul className="text-blue-700 text-sm mt-2 space-y-1">
            <li>• Live demo of our teaching methodology</li>
            <li>• Course curriculum walkthrough</li>
            <li>• Q&A with instructor</li>
            <li>• Career guidance session</li>
          </ul>
        </div>
        
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            disabled={!formData.fullName || !formData.email || !formData.phone || !formData.timeSlot}
          >
            Book Demo Class
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

export default DemoModal;
