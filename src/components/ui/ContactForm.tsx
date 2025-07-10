'use client';

import React, { useState } from 'react';
import Button from './Button';

interface ContactFormProps {
  type: 'demo' | 'counseling';
  onSubmit?: (data: any) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const isDemo = type === 'demo';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">{isDemo ? '🎥' : '📞'}</div>
        <p className="text-gray-600">
          {isDemo 
            ? 'See our program in action with a live demo session'
            : 'Get personalized career guidance from our experts'
          }
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+91 9876543210"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Experience
          </label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select your level</option>
            <option value="fresher">Fresher (0-1 years)</option>
            <option value="junior">Junior (1-3 years)</option>
            <option value="mid">Mid-level (3-5 years)</option>
            <option value="senior">Senior (5+ years)</option>
            <option value="career-switch">Career Switcher</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {isDemo ? 'Specific topics you want to see in demo' : 'Tell us about your career goals'}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={isDemo 
            ? 'e.g., Python basics, SQL queries, Dashboard creation...'
            : 'e.g., I want to transition to data analytics from marketing...'
          }
        />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl">🎁</span>
          <span className="font-semibold text-gray-800">What you'll get:</span>
        </div>
        <ul className="text-sm text-gray-600 space-y-1">
          {isDemo ? (
            <>
              <li>• 30-minute live demo session</li>
              <li>• Complete curriculum walkthrough</li>
              <li>• Project showcase and career paths</li>
              <li>• Q&A with industry experts</li>
            </>
          ) : (
            <>
              <li>• Personalized career roadmap</li>
              <li>• Skill gap analysis</li>
              <li>• Industry insights and trends</li>
              <li>• Course recommendations</li>
            </>
          )}
        </ul>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
      >
        {isDemo ? '🎥 Book Free Demo' : '📞 Schedule Free Counseling'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
        No spam, we promise! 🤝
      </p>
    </form>
  );
};

export default ContactForm;
