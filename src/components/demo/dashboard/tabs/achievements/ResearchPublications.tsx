import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Microscope } from 'lucide-react';
import { researchAchievements } from '../../../data/achievementsData';

export const ResearchPublications = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Microscope className="w-5 h-5" />
          Research & Publications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {researchAchievements.map((achievement, idx) => (
            <div key={idx} className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium">{achievement.title}</div>
                <span className="text-sm text-gray-500">{achievement.date}</span>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                {achievement.details.map((detail, index) => (
                  <p key={index}>• {detail}</p>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {achievement.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};