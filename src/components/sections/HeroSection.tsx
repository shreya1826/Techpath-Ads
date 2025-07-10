'use client';

import React from 'react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ContactForm from '../ui/ContactForm';
import { useModal } from '@/hooks/useModal';
import { courseData } from '@/data/courseData';

const HeroSection: React.FC = () => {
  const counselingModal = useModal();

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('pricing');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              {courseData.hero.title} <span className="text-yellow-400">{courseData.hero.highlightText}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn animation-delay-200">
              {courseData.hero.subtitle}
            </p>

            {/* Value Proposition */}
            <div className="grid md:grid-cols-2 gap-6 mb-10 animate-fadeIn animation-delay-400">
              {courseData.hero.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn animation-delay-600">
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToEnroll}
                className="animate-pulse"
              >
                🔥 ENROLL NOW - Limited Seats
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={counselingModal.openModal}
              >
                📞 Book Free Career Counseling
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="text-center animate-fadeIn animation-delay-800">
              <p className="text-lg mb-4">{courseData.hero.stats.studentsPlaced} Students Placed in Top Companies</p>
              <div className="flex justify-center items-center space-x-8 mb-4 flex-wrap gap-4">
                {courseData.hero.stats.companies.map((company, index) => (
                  <div key={index} className="bg-white text-gray-800 px-4 py-2 rounded font-semibold">
                    {company}
                  </div>
                ))}
              </div>
              <p className="text-lg">⭐ {courseData.hero.stats.rating} Rating from {courseData.hero.stats.reviews} Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Modal */}
      <Modal
        isOpen={counselingModal.isOpen}
        onClose={counselingModal.closeModal}
        title="Free Career Counseling"
        size="lg"
      >
        <ContactForm type="counseling" />
      </Modal>
    </>
  );
};

export default HeroSection;
