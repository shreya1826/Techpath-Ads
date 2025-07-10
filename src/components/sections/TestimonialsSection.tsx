import React from 'react';
import Card from '../ui/Card';
import { courseData } from '@/data/courseData';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Student Success Stories That Inspire
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {courseData.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <div className="text-3xl mb-4">{testimonial.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{testimonial.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{testimonial.role}</p>
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-800">Salary Jump: {testimonial.salaryJump}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="inline-block bg-white">
            <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-500 text-4xl">▶️</span>
            </div>
            <p className="text-gray-600 font-semibold">Hear directly from our successful alumni</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
