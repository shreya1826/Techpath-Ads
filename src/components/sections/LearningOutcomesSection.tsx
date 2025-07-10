import React from 'react';
import Card from '../ui/Card';

const LearningOutcomesSection: React.FC = () => {
  const outcomes = [
    {
      id: 1,
      icon: '📊',
      title: 'DATA ANALYSIS MASTERY',
      color: 'blue',
      skills: [
        'Clean & Process Large Datasets',
        'Perform Statistical Analysis',
        'Identify Business Insights',
        'Create Data-Driven Recommendations'
      ]
    },
    {
      id: 2,
      icon: '🖥️',
      title: 'TECHNICAL PROFICIENCY',
      color: 'green',
      skills: [
        'Write Professional Python Code',
        'Build Complex SQL Queries',
        'Design Interactive Dashboards',
        'Deploy Applications to Cloud'
      ]
    },
    {
      id: 3,
      icon: '💼',
      title: 'CAREER READINESS',
      color: 'purple',
      skills: [
        'Portfolio with 10+ Projects',
        'Industry-Standard Certification',
        'Interview Preparation',
        'Job Placement Assistance'
      ]
    },
    {
      id: 4,
      icon: '🎯',
      title: 'REAL-WORLD EXPERIENCE',
      color: 'orange',
      skills: [
        'E-commerce Data Analysis',
        'Banking Risk Assessment',
        'Sales Performance Dashboards',
        'YouTube & IMDB Analytics'
      ]
    }
  ];

  const progressSteps = [
    {
      percentage: '25%',
      title: 'Python Basics',
      period: 'Weeks 1-4',
      color: 'from-blue-400 to-blue-600'
    },
    {
      percentage: '50%',
      title: 'SQL Mastery',
      period: 'Weeks 5-8',
      color: 'from-green-400 to-green-600'
    },
    {
      percentage: '75%',
      title: 'Visualization',
      period: 'Weeks 9-12',
      color: 'from-purple-400 to-purple-600'
    },
    {
      percentage: '100%',
      title: 'Job Ready',
      period: 'Weeks 13-16',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        border: 'border-blue-500',
        dot: 'bg-blue-500'
      },
      green: {
        bg: 'from-green-500 to-green-600',
        border: 'border-green-500',
        dot: 'bg-green-500'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        border: 'border-purple-500',
        dot: 'bg-purple-500'
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        border: 'border-orange-500',
        dot: 'bg-orange-500'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            What You'll Achieve After 16 Weeks
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Transform from a beginner to a job-ready data professional with industry-relevant skills and
            real-world experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {outcomes.slice(0, 2).map((outcome) => {
              const colors = getColorClasses(outcome.color);
              return (
                <div key={outcome.id} className="group">
                  <Card className={`shadow-lg border-l-4 ${colors.border}`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{outcome.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">{outcome.title}</h3>
                        <div className="space-y-3">
                          {outcome.skills.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 ${colors.dot} rounded-full`}></div>
                              <p className="text-gray-700">{skill}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {outcomes.slice(2, 4).map((outcome) => {
              const colors = getColorClasses(outcome.color);
              return (
                <div key={outcome.id} className="group">
                  <Card className={`shadow-lg border-l-4 ${colors.border}`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl">{outcome.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">{outcome.title}</h3>
                        <div className="space-y-3">
                          {outcome.skills.map((skill, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 ${colors.dot} rounded-full`}></div>
                              <p className="text-gray-700">{skill}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-20 bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Your Learning Journey Progress</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {progressSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{step.percentage}</span>
                </div>
                <p className="font-semibold text-gray-800">{step.title}</p>
                <p className="text-sm text-gray-600">{step.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomesSection;
