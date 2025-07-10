import React from 'react';
import Button from '../ui/Button';

const InstructorProfileSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Learn from Industry Veterans
        </h2>
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-4xl">👨‍💼</span>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-2 text-gray-800">Rajesh Kumar</h3>
              <p className="text-xl text-gray-600 mb-6">Senior Data Analytics Consultant</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 10+ Years in Data Analytics
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Ex-Senior Analyst at TCS/Infosys
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 500+ Students Successfully Placed
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Google & Microsoft Certified
                  </p>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <Button 
                  variant="primary" 
                  className="px-6 py-3"
                >
                  View LinkedIn Profile
                </Button>
                <Button 
                  variant="secondary" 
                  className="px-6 py-3"
                >
                  Watch Introduction Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfileSection;
