import React from 'react';
import { GraduationCap, Award, Puzzle } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  titleCn, 
  description, 
  descriptionCn,
  points
}: { 
  icon: React.ElementType;
  title: string;
  titleCn: string;
  description: string;
  descriptionCn: string;
  points: string[];
}) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-2xl font-bold mb-2">
      {title}
      <span className="block text-lg font-medium text-gray-600 mt-1">
        {titleCn}
      </span>
    </h3>
    <p className="text-gray-600 mb-6">
      {description}
      <span className="block mt-1 text-gray-500">
        {descriptionCn}
      </span>
    </p>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3" />
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const FeatureSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Academic Planning",
      titleCn: "学业规划",
      description: "Comprehensive academic strategy tailored to your goals",
      descriptionCn: "量身定制的综合学业策略",
      points: [
        "Personalized course selection and academic roadmap",
        "College application strategy and timeline",
        "GPA optimization and academic performance tracking",
        "Test preparation planning (SAT/ACT/AP)"
      ]
    },
    {
      icon: Award,
      title: "Activities",
      titleCn: "课外活动",
      description: "Strategic extracurricular planning for college applications",
      descriptionCn: "战略性课外活动规划",
      points: [
        "Leadership development opportunities",
        "Community service project planning",
        "Competition and award strategies",
        "Summer program recommendations"
      ]
    },
    {
      icon: Puzzle,
      title: "Talent Development",
      titleCn: "特长发展",
      description: "Nurture and showcase your unique talents",
      descriptionCn: "培养和展示您的独特才能",
      points: [
        "Skill assessment and development planning",
        "Portfolio building and presentation",
        "Research and project opportunities",
        "Mentorship and expert connections"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Comprehensive Education Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Your path to academic excellence and personal growth
            <span className="block mt-1">
              通往学术卓越和个人成长的道路
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};