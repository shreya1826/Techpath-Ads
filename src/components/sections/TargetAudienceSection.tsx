import React from 'react';
import Card from '../ui/Card';
import { courseData, colorVariants } from '@/data/courseData';

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Perfect For Aspiring Data Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're starting fresh, switching careers, or scaling your business, our comprehensive program is designed for your success
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courseData.targetAudience.map((audience, index) => {
            const colors = colorVariants[audience.color as keyof typeof colorVariants];
            
            return (
              <div key={index} className="group">
                <Card className={`bg-gradient-to-br ${colors.light} h-full border-2 border-transparent group-hover:border-gray-300 transition-all duration-300`}>
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{audience.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{audience.title}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${colors.bg} mx-auto rounded-full`}></div>
                  </div>

                  <div className="space-y-4">
                    {audience.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <p className="text-gray-700 font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className={`text-sm font-semibold ${colors.darkText}`}>💡 {audience.description}</p>
                      <p className="text-xs text-gray-600 mt-1">{audience.subtitle}</p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
              <p className="text-gray-600">Students with zero coding experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-600">Career switchers successfully placed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3x</div>
              <p className="text-gray-600">Average salary increase post-completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
