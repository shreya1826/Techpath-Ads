'use client';

import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import EnrollmentModal from '../ui/EnrollmentModal';
import { useModal } from '@/hooks/useModal';

const PricingSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [seatsLeft, setSeatsLeft] = useState(21);
  const enrollmentModal = useModal();

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // Seats counter (decreases randomly)
    const seatsTimer = setInterval(() => {
      if (seatsLeft > 15) {
        setSeatsLeft(prev => prev - 1);
      }
    }, Math.random() * 60000 + 30000);

    return () => {
      clearInterval(timer);
      clearInterval(seatsTimer);
    };
  }, [seatsLeft]);

  const handleEnroll = () => {
    enrollmentModal.openModal();
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Pricing Card */}
          <div className="relative">
            {/* Urgency Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold animate-bounce">
                ⚡ LIMITED TIME OFFER
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 p-1 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    🔥 EARLY BIRD SPECIAL - ENDING SOON!
                  </h2>

                  {/* Countdown Timer */}
                  <div className="bg-red-50 rounded-2xl p-4 mb-6 border-2 border-red-200">
                    <p className="text-red-700 font-semibold mb-2">⏰ Offer Expires In:</p>
                    <div className="flex justify-center space-x-4 text-2xl font-bold text-red-600">
                      <div className="text-center">
                        <div className="bg-red-600 text-white px-3 py-2 rounded-lg">{timeLeft.hours}</div>
                        <div className="text-sm mt-1">Hours</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-600 text-white px-3 py-2 rounded-lg">{timeLeft.minutes}</div>
                        <div className="text-sm mt-1">Mins</div>
                      </div>
                      <div className="text-center">
                        <div className="bg-red-600 text-white px-3 py-2 rounded-lg">{timeLeft.seconds}</div>
                        <div className="text-sm mt-1">Secs</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {/* Price */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
                      <div className="text-gray-500 text-xl line-through mb-2">₹44,999</div>
                      <div className="text-4xl font-bold text-green-600 mb-2">₹29,999</div>
                      <div className="text-green-700 font-semibold">SAVE ₹15,000!</div>
                      <div className="text-sm text-gray-600 mt-2">Complete 16-Week Program</div>
                    </div>
                  </div>

                  {/* Batch Info */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
                      <div className="text-2xl mb-2">📅</div>
                      <div className="font-bold text-blue-800 mb-2">Next Batch Starts</div>
                      <div className="text-blue-600 font-semibold">January 15, 2025</div>
                      <div className="text-sm text-gray-600 mt-2">Weekend Classes</div>
                    </div>
                  </div>

                  {/* Seats Left */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-200">
                      <div className="text-2xl mb-2">🔥</div>
                      <div className="font-bold text-red-800 mb-2">Only</div>
                      <div className="text-3xl font-bold text-red-600">{seatsLeft}</div>
                      <div className="text-red-700 font-semibold">SEATS LEFT</div>
                    </div>
                  </div>
                </div>

                {/* EMI Option */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-4 border-2 border-purple-200">
                    <p className="text-purple-800 font-semibold">💳 Easy EMI Available: Starting ₹2,500/month</p>
                  </div>
                </div>

                {/* Bonus Inclusions */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 mb-8 border-2 border-orange-200">
                  <h3 className="text-2xl font-bold text-center mb-6 text-orange-800">🎁 EXCLUSIVE BONUS INCLUSIONS</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <p className="flex items-center"><span className="text-orange-500 mr-2">🎯</span> Free Career Counseling Session</p>
                      <p className="flex items-center"><span className="text-orange-500 mr-2">📚</span> Lifetime Course Material Access</p>
                      <p className="flex items-center"><span className="text-orange-500 mr-2">💼</span> Resume Building Workshop</p>
                    </div>
                    <div className="space-y-3">
                      <p className="flex items-center"><span className="text-orange-500 mr-2">🏆</span> Industry Recognized Certificate</p>
                      <p className="flex items-center"><span className="text-orange-500 mr-2">🤝</span> Job Placement Assistance</p>
                      <p className="flex items-center"><span className="text-orange-500 mr-2">👥</span> Alumni Network Access</p>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <div className="text-orange-800 font-bold">Worth ₹25,000+ - FREE for You!</div>
                  </div>
                </div>

                {/* Main CTA Button */}
                <div className="text-center mb-6">
                  <Button
                    onClick={handleEnroll}
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    🚀 SECURE YOUR SEAT NOW - ₹29,999
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">⚡ Instant confirmation via WhatsApp</p>
                </div>

                {/* Risk Reversal */}
                <div className="text-center space-y-2">
                  <p className="text-gray-600">🛡️ <strong>7-Day Money-Back Guarantee</strong> - No Questions Asked</p>
                  <p className="text-gray-600">🔒 <strong>Secure Payment</strong> - SSL Encrypted & Safe</p>
                  <p className="text-gray-600">📞 <strong>24/7 Support</strong> - We're here to help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span><strong>47 people</strong> viewing this page</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span><strong>12 enrolled</strong> in last 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span><strong>4.9/5</strong> student rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={enrollmentModal.isOpen} onClose={enrollmentModal.closeModal} />
    </section>
  );
};

export default PricingSection;
