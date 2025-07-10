'use client';

import React from 'react';
import EnrollmentModal from '../ui/EnrollmentModal';
import CounselingModal from '../ui/CounselingModal';
import { useModal } from '@/hooks/useModal';

const FinalCTASection: React.FC = () => {
  const enrollmentModal = useModal();
  const counselingModal = useModal();

  const handleEnroll = () => {
    enrollmentModal.openModal();
  };

  const handleCounseling = () => {
    counselingModal.openModal();
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
        <p className="text-xl mb-8">Join 500+ successful graduates who landed their dream jobs</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleEnroll}
            className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            🚀 Enroll Now - ₹29,999
          </button>
          <button 
            onClick={handleCounseling}
            className="border-2 border-white text-white hover:bg-white/10 hover:border-white/80 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            📞 Talk to Career Counselor
          </button>
        </div>
      </div>

      {/* Modals */}
      <EnrollmentModal isOpen={enrollmentModal.isOpen} onClose={enrollmentModal.closeModal} />
      <CounselingModal isOpen={counselingModal.isOpen} onClose={counselingModal.closeModal} />
    </section>
  );
};

export default FinalCTASection;
