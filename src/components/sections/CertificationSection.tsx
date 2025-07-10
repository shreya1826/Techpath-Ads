import React from 'react';
import Button from '../ui/Button';

const CertificationSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Get Industry-Recognized Certification
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Business Analytics Professional</h3>
                <p className="text-gray-600">Certified completion of 150+ hours of intensive training</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">What's Included:</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="text-green-500 mr-3">✓</span> Digital Certificate with Verification Code
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-3">✓</span> LinkedIn Skill Badge
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-3">✓</span> Project Portfolio Certification
              </p>
              <p className="flex items-center">
                <span className="text-green-500 mr-3">✓</span> Industry Recognition
              </p>
            </div>
            <Button 
              variant="primary" 
              className="mt-6 px-6 py-3"
            >
              Preview Your Certificate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
