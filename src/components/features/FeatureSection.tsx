import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle2 } from 'lucide-react';

const features = {
  academic: [
    {
      icon: "📚",
      title: "Course Selection",
      subtitle: "课程规划",
      points: ["AP/IB optimization", "Subject track planning", "Grade improvement strategies"]
    },
    {
      icon: "🧠",
      title: "Test Preparation",
      subtitle: "考试准备",
      points: ["SAT/ACT strategies", "AP exam preparation", "Subject test planning"]
    },
    {
      icon: "🎯",
      title: "Academic Competitions",
      subtitle: "学科竞赛",
      points: ["Competition selection", "Training programs", "Award optimization"]
    }
  ],
  activities: [
    {
      icon: "🏆",
      title: "Competition Excellence",
      subtitle: "竞赛卓越",
      points: ["Science & Math Olympiads", "Research Competitions", "Innovation Challenges"]
    },
    {
      icon: "👥",
      title: "Leadership Development",
      subtitle: "领导力培养",
      points: ["Student Organization Leadership", "Community Service", "Project Management"]
    },
    {
      icon: "🔬",
      title: "Research Experience",
      subtitle: "研究经验",
      points: ["University Lab Research", "Independent Projects", "Research Publications"]
    }
  ],
  talents: [
    {
      icon: "💡",
      title: "Research & Innovation",
      subtitle: "研究与创新",
      points: ["Scientific Research Projects", "Patent Development", "Technology Innovation"]
    },
    {
      icon: "🎓",
      title: "Academic Excellence",
      subtitle: "学术特长",
      points: ["International Olympiad Training", "Advanced Research Programs", "Academic Competition Success"]
    },
    {
      icon: "⭐",
      title: "Special Talents",
      subtitle: "特殊才能",
      points: ["Music & Arts Achievement", "Athletic Excellence", "Entrepreneurship Success"]
    }
  ]
};

export const FeatureSection = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive Solution for Elite Education
            <span className="block text-2xl text-gray-600 mt-2">
              精英教育全方位解决方案
            </span>
          </h2>
        </div>

        <Tabs defaultValue="academic" className="space-y-8">
          <TabsList className="w-full justify-center">
            <TabsTrigger value="academic">Academic Planning 学业规划</TabsTrigger>
            <TabsTrigger value="activities">Activities 课外活动</TabsTrigger>
            <TabsTrigger value="talents">Talent Development 特长发展</TabsTrigger>
          </TabsList>

          {(Object.keys(features) as Array<keyof typeof features>).map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features[category].map((feature, idx) => (
                  <FeatureCard key={idx} {...feature} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  subtitle, 
  points 
}: { 
  icon: string; 
  title: string; 
  subtitle: string; 
  points: string[];
}) => (
  <Card className="group hover:shadow-lg transition-all">
    <CardContent className="pt-6">
      <div className="space-y-4">
        <div className="transform group-hover:scale-110 transition-transform text-4xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">
          {title}
          <span className="block text-base text-gray-600">{subtitle}</span>
        </h3>
        <ul className="space-y-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);