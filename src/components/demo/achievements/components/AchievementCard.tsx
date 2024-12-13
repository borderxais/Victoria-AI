import React from 'react';
import { Target, Trophy, Star, Circle } from 'lucide-react';
import type { Achievement } from '../../types';

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h5 className="font-medium text-blue-900">{achievement.name}</h5>
          {achievement.date && (
            <span className="text-sm text-gray-500">{achievement.date}</span>
          )}
        </div>
        
        <div className="space-y-1 text-sm">
          {achievement.level && (
            <div className="flex items-center text-gray-700">
              <Target className="w-4 h-4 mr-1 text-blue-500" />
              Level: {achievement.level}
            </div>
          )}
          {achievement.award && (
            <div className="flex items-center text-gray-700">
              <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
              {achievement.award}
            </div>
          )}
          {achievement.position && (
            <div className="flex items-center text-gray-700">
              <Star className="w-4 h-4 mr-1 text-purple-500" />
              {achievement.position}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};