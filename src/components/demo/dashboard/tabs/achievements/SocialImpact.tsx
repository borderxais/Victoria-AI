import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Heart } from 'lucide-react';
import { socialImpactAchievements } from '../../../data/achievementsData';

export const SocialImpact = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Social Impact & Leadership
        </CardTitle>
      </CardHeader>
      <CardContent>
        {socialImpactAchievements.map((achievement, idx) => (
          <div key={idx} className="bg-pink-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">{achievement.title}</div>
              <span className="text-sm text-gray-500">{achievement.period}</span>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              {achievement.details.map((detail, index) => (
                <p key={index}>• {detail}</p>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2">
              {achievement.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};