'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import CounselingModal from '../ui/CounselingModal';
import { useModal } from '@/hooks/useModal';

interface FAQItem {
  id: number;
  icon: string;
  title: string;
  content: string | React.ReactNode;
  color: string;
}

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const counselingModal = useModal();

  const handleWhatsApp = () => {
    window.open('https://wa.me/918299708052?text=Hi! I have some questions about the Data Analytics course', '_blank');
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      icon: '❓',
      title: 'Do I need prior coding experience?',
      color: 'blue',
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-300">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>No coding experience required!</strong> Our course is designed for complete beginners. We start with the very basics of programming and gradually build your skills.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Beginner-friendly curriculum</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Step-by-step guidance</p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Hands-on practice</p>
              <p className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Dedicated support</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      icon: '💻',
      title: 'What if I miss a live class?',
      color: 'green',
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-300">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Don't worry! We have you covered:</strong>
          </p>
          <div className="space-y-3">
            <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> All classes are recorded and available 24/7</p>
            <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Doubt clearing sessions every week</p>
            <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> One-on-one mentoring sessions</p>
            <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Access to class materials and assignments</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      icon: '🎯',
      title: 'What kind of jobs can I get after completion?',
      color: 'purple',
      content: (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-300">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Our graduates land roles across various industries:</strong>
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="flex items-center"><span className="text-purple-500 mr-2">•</span> Data Analyst</p>
              <p className="flex items-center"><span className="text-purple-500 mr-2">•</span> Business Analyst</p>
              <p className="flex items-center"><span className="text-purple-500 mr-2">•</span> Data Scientist (Entry Level)</p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center"><span className="text-purple-500 mr-2">•</span> BI Developer</p>
              <p className="flex items-center"><span className="text-purple-500 mr-2">•</span> Reporting Analyst</p>
              <p className="flex items-center"><span className="text-purple-500 mr-2">•</span> Data Consultant</p>
            </div>
          </div>
          <div className="mt-4 bg-purple-100 rounded-lg p-3">
            <p className="font-semibold text-purple-800">💰 Average Salary Range: ₹4L - ₹12L per annum</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      icon: '⏰',
      title: 'How much time do I need to dedicate daily?',
      color: 'orange',
      content: (
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-300">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Flexible schedule designed for working professionals:</strong>
          </p>
          <div className="bg-orange-100 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><span className="text-orange-500 mr-2">•</span> <strong>Live Classes:</strong> 2 hours on weekends (Sat & Sun)</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">•</span> <strong>Self Study:</strong> 1-2 hours on weekdays</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">•</span> <strong>Projects:</strong> 3-4 hours per week</li>
              <li className="flex items-center"><span className="text-orange-500 mr-2">•</span> <strong>Total:</strong> 10-12 hours per week</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 5,
      icon: '💳',
      title: 'Can I pay in installments?',
      color: 'teal',
      content: (
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-300">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Yes! We offer flexible EMI options:</strong>
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-teal-200">
              <h4 className="font-semibold text-teal-800">6-Month EMI</h4>
              <p className="text-teal-600">₹5,000/month</p>
              <p className="text-sm text-gray-600">No processing fee</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-teal-200">
              <h4 className="font-semibold text-teal-800">12-Month EMI</h4>
              <p className="text-teal-600">₹2,500/month</p>
              <p className="text-sm text-gray-600">Minimal processing fee</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      icon: '👨‍🏫',
      title: 'Will I get individual attention?',
      color: 'indigo',
      content: (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-300">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Absolutely!</strong> We maintain small batch sizes to ensure personalized attention:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <h4 className="font-semibold text-indigo-800">Small Batches</h4>
              <p className="text-indigo-600">Max 25 students</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <h4 className="font-semibold text-indigo-800">1-on-1 Sessions</h4>
              <p className="text-indigo-600">Weekly available</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <h4 className="font-semibold text-indigo-800">Mentor Support</h4>
              <p className="text-indigo-600">24/7 available</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4">
            <span className="text-blue-700 font-semibold text-sm">❓ Got Questions? We've Got Answers</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our data analytics course. Can't find what you're looking for?{' '}
            <button 
              onClick={handleWhatsApp}
              className="text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              Chat with us!
            </button>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`group bg-white rounded-2xl shadow-lg border-l-4 border-${faq.color}-500 hover:shadow-xl transition-all duration-300`}
              >
                <div className="p-8 cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${faq.color}-500 to-${faq.color}-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-xl">{faq.icon}</span>
                      </div>
                      <h3 className={`text-xl font-bold text-gray-800 group-hover:text-${faq.color}-600 transition-colors`}>
                        {faq.title}
                      </h3>
                    </div>
                    <div className={`w-10 h-10 bg-${faq.color}-100 rounded-full flex items-center justify-center group-hover:bg-${faq.color}-200 transition-colors`}>
                      <span 
                        className={`text-${faq.color}-600 font-bold text-xl transition-transform duration-300`}
                        style={{
                          transform: openFAQ === faq.id ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      >
                        {openFAQ === faq.id ? '−' : '+'}
                      </span>
                    </div>
                  </div>
                  {openFAQ === faq.id && (
                    <div className="mt-6">
                      {faq.content}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6">Our career counselors are here to help you make the right decision</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={counselingModal.openModal}
                  className="border-2 border-white text-white hover:bg-white/10 hover:border-white/80 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  📞 Talk to Career Counselor
                </button>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3"
                >
                  💬 Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counseling Modal */}
      <CounselingModal isOpen={counselingModal.isOpen} onClose={counselingModal.closeModal} />
    </section>
  );
};

export default FAQSection;
