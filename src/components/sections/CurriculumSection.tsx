'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { courseData, colorVariants } from '@/data/courseData';

const CurriculumSection: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggleModule = (moduleId: number) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-800">
          {courseData.curriculum.title}
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {courseData.curriculum.subtitle}
        </p>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-600 h-full hidden lg:block"></div>

          {/* Module Cards */}
          <div className="space-y-16">
            {courseData.curriculum.modules.map((module, index) => {
              const isEven = index % 2 === 0;
              const colors = colorVariants[module.color as keyof typeof colorVariants];
              const isOpen = openModule === module.id;

              return (
                <div key={module.id} className={`flex flex-col lg:${isEven ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className={`border-l-4 ${colors.border}`}>
                      <div 
                        className="flex items-center justify-between cursor-pointer" 
                        onClick={() => toggleModule(module.id)}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                            {module.id}
                          </div>
                          <div className="ml-4">
                            <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
                            <p className={`font-semibold ${colors.text}`}>{module.weeks}</p>
                          </div>
                        </div>
                        <div className={`w-8 h-8 ${colors.lightBg} rounded-full flex items-center justify-center`}>
                          {isOpen ? (
                            <ChevronUp className={`w-5 h-5 ${colors.text}`} />
                          ) : (
                            <ChevronDown className={`w-5 h-5 ${colors.text}`} />
                          )}
                        </div>
                      </div>

                      {isOpen && (
                        <div className="mt-6">
                          <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center">
                                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-green-600 text-sm">✓</span>
                                </span>
                                <p className="text-gray-700">{topic}</p>
                              </div>
                            ))}
                          </div>
                          <div className={`bg-gradient-to-r ${colors.light} p-4 rounded-xl border border-gray-200`}>
                            <p className={`font-semibold ${colors.darkText} flex items-center`}>
                              <span className="text-2xl mr-2">🚀</span> Project: {module.project}
                            </p>
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>

                  <div className={`lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'} mt-8 lg:mt-0`}>
                    <div className={`text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                      <div className="text-6xl mb-4">{module.icon}</div>
                      <h4 className="text-xl font-semibold text-gray-700 mb-2">{module.description}</h4>
                      <p className="text-gray-600">{module.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            📚 Download Complete Syllabus PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
