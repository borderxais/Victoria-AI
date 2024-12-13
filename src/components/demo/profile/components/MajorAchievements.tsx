import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from 'lucide-react';
import { CategorySection } from '../../achievements/components/CategorySection';
import type { AchievementCategory } from '../../types';

interface MajorAchievementsProps {
  achievements: AchievementCategory[];
}

export const MajorAchievements: React.FC<MajorAchievementsProps> = ({ achievements }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="w-5 h-5 mr-2" />
          Major Achievements 主要成就
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((category, idx) => (
            <CategorySection key={idx} category={category} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};