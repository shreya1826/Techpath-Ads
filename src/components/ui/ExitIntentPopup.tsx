'use client';

import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Button from './Button';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimDiscount: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose, onClaimDiscount }) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleClaimDiscount = () => {
    onClaimDiscount();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Special Offer">
      <div className="bg-white p-8 rounded-xl max-w-lg w-full mx-4 popup-slide-in">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Wait! Don't Miss This Opportunity
          </h3>
          
          {/* Special Offer */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-6">
            <p className="text-xl mb-2 text-gray-800">
              Get <span className="font-bold text-red-600">₹5,000 Extra Discount</span> + Free Career Counseling
            </p>
            <p className="text-red-600 font-semibold text-lg">
              Valid for Next {formatTime(timeLeft)} Only!
            </p>
            <div className="mt-3">
              <span className="text-gray-500 line-through text-lg">₹29,999</span>
              <span className="text-3xl font-bold text-green-600 ml-2">₹24,999</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">Save ₹20,000 Total!</p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-red-100 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-semibold mb-2">⏰ Offer Expires In:</p>
            <div className="text-2xl font-bold text-red-600">
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Benefits */}
          <div className="text-left mb-6">
            <h4 className="font-bold text-gray-800 mb-3">What You Get:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Complete Data Analytics Course (16 Weeks)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                1-on-1 Career Counseling Session
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Job Placement Assistance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Industry Certification
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                7-Day Money-Back Guarantee
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleClaimDiscount}
              variant="primary"
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-all duration-200 pulse-glow"
            >
              🎉 Claim ₹5,000 Discount
            </Button>
            <Button
              onClick={onClose}
              variant="secondary"
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 px-6 rounded-xl"
            >
              Maybe Later
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 text-xs text-gray-500 space-y-1">
            <p>🔒 Secure Payment - SSL Encrypted</p>
            <p>🛡️ 7-Day Money-Back Guarantee</p>
            <p>📞 24/7 Support Available</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ExitIntentPopup;
