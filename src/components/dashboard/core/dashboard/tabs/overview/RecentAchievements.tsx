import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from 'lucide-react';

export const RecentAchievements = () => {
  const achievements = [
    {
      category: "Research",
      description: "Published in Nature Scientific Reports",
      bgColor: "bg-blue-50"
    },
    {
      category: "Competition",
      description: "Intel Science Talent Search Finalist",
      bgColor: "bg-purple-50"
    },
    {
      category: "Leadership",
      description: "AI for Good Foundation Founder",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Recent Major Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.category} className={`${achievement.bgColor} p-4 rounded-lg`}>
              <h3 className="font-medium mb-2">{achievement.category}</h3>
              <div className="text-sm text-gray-600">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};