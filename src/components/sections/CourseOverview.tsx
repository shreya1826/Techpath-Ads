import React from 'react';

const CourseOverview: React.FC = () => {
  const features = [
    {
      icon: '🐍',
      title: 'COMPLETE PYTHON MASTERY',
      items: [
        'Data Structures & Functions',
        'NumPy, Pandas, Matplotlib',
        'Web Scraping & APIs',
        '15+ Coding Projects'
      ]
    },
    {
      icon: '🗄️',
      title: 'DATABASE & SQL EXPERTISE',
      items: [
        'PostgreSQL Database Management',
        'Advanced Joins & Window Functions',
        'Real E-commerce Data Analysis',
        'Banking Risk Analytics'
      ]
    },
    {
      icon: '📈',
      title: 'POWER BI DASHBOARD CREATION',
      items: [
        'Interactive Visualizations',
        'DAX Functions & Data Modeling',
        'Cloud Deployment',
        '3+ Dashboard Projects'
      ]
    },
    {
      icon: '☁️',
      title: 'CLOUD & DEPLOYMENT',
      items: [
        'AWS Cloud Computing',
        'Flask & Streamlit Apps',
        'Git Version Control',
        'Portfolio Website Creation'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Why Our Full Stack Business Analytics Program Stands Out
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <ul className="text-gray-600 space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
