import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Trophy, Award } from 'lucide-react';
import type { Achievement } from '../../types';

interface CompetitionsAwardsProps {
  achievements: Achievement[];
}

export const CompetitionsAwards: React.FC<CompetitionsAwardsProps> = ({ achievements }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Competitions & Awards
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="relative flex items-start ml-8">
                  <div className="absolute -left-8 mt-1.5">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">{achievement.name}</div>
                      <span className="text-sm text-gray-500">{achievement.date}</span>
                    </div>
                    {achievement.level && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          {achievement.level}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};