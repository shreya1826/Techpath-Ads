'use client';

import React from 'react';
import Button from '../ui/Button';
import DemoModal from '../ui/DemoModal';
import CounselingModal from '../ui/CounselingModal';
import { useModal } from '@/hooks/useModal';

const EnrollmentOptionsSection: React.FC = () => {
  const demoModal = useModal();
  const counselingModal = useModal();

  const handleWhatsApp = () => {
    window.open('https://wa.me/918299708052?text=Hi! I want to know more about the Data Analytics course', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+918299708052');
  };

  const handleDemo = () => {
    demoModal.openModal();
  };

  const handleEnroll = () => {
    window.open('https://wa.me/918299708052?text=I want to enroll in the Data Analytics course', '_blank');
  };

  const handleBrochure = () => {
    window.open('https://wa.me/918299708052?text=Please send me the course brochure', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Choose Your Preferred Way to Join
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-bold mb-2">INSTANT WHATSAPP</h3>
            <p className="text-sm text-gray-600 mb-4">Get instant responses to your queries</p>
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white w-full"
            >
              Chat on WhatsApp →
            </Button>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-bold mb-2">SPEAK TO ADVISOR</h3>
            <p className="text-sm text-gray-600 mb-4">Free career counseling & course guidance</p>
            <Button 
              onClick={handleCall}
              className="bg-blue-500 hover:bg-blue-600 text-white w-full"
            >
              Call +91-8299708052 →
            </Button>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="font-bold mb-2">BOOK FREE DEMO</h3>
            <p className="text-sm text-gray-600 mb-4">Experience our teaching methodology</p>
            <Button 
              onClick={handleDemo}
              className="bg-purple-500 hover:bg-purple-600 text-white w-full"
            >
              Schedule Demo Class →
            </Button>
          </div>
          
          <div className="bg-red-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-4">💳</div>
            <h3 className="font-bold mb-2">SECURE ENROLLMENT</h3>
            <p className="text-sm text-gray-600 mb-4">Secure your seat with easy payment</p>
            <Button 
              onClick={handleEnroll}
              className="bg-red-500 hover:bg-red-600 text-white w-full"
            >
              Pay & Enroll Now →
            </Button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="font-bold mb-2">GET COURSE DETAILS</h3>
            <p className="text-sm text-gray-600 mb-4">Detailed course information & fees</p>
            <Button 
              onClick={handleBrochure}
              className="bg-gray-500 hover:bg-gray-600 text-white w-full"
            >
              Email Brochure →
            </Button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <DemoModal isOpen={demoModal.isOpen} onClose={demoModal.closeModal} />
      <CounselingModal isOpen={counselingModal.isOpen} onClose={counselingModal.closeModal} />
      {/* 
      <EnrollmentModal isOpen={enrollmentModal.isOpen} onClose={enrollmentModal.closeModal} />
      <BrochureModal isOpen={brochureModal.isOpen} onClose={brochureModal.closeModal} />
      */}
    </section>
  );
};

export default EnrollmentOptionsSection;
