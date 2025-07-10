'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ContactForm from '../ui/ContactForm';
import { useModal } from '@/hooks/useModal';
import { navigationItems } from '@/data/courseData';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const demoModal = useModal();
  const counselingModal = useModal();

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('pricing');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
              <Link href="#hero-section">
                <Image
                  className="w-auto h-10"
                  src="https://techpath.biz/wp-content/uploads/2024/05/logo-2-1.png.webp"
                  alt="Company Logo"
                  width={200}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex space-x-3">
              <Button
                variant="primary"
                size="sm"
                onClick={demoModal.openModal}
              >
                Demo
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={scrollToEnroll}
              >
                Enroll Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      demoModal.openModal();
                      setIsMenuOpen(false);
                    }}
                  >
                    Demo
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      scrollToEnroll();
                      setIsMenuOpen(false);
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Demo Modal */}
      <Modal
        isOpen={demoModal.isOpen}
        onClose={demoModal.closeModal}
        title="Book Your Free Demo Session"
        size="lg"
      >
        <ContactForm type="demo" />
      </Modal>

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

export default Navigation;
