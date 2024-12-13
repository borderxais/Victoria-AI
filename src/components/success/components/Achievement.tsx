import React from 'react';
import { Star } from 'lucide-react';

interface AchievementProps {
  achievement: string;
}

export const Achievement: React.FC<AchievementProps> = ({ achievement }) => (
  <div className="flex items-start">
    <Star className="w-5 h-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
    <span className="text-sm text-gray-600">{achievement}</span>
  </div>
);