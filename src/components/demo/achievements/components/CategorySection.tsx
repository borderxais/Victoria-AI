import React from 'react';
import { AchievementCard } from './AchievementCard';
import type { AchievementCategory } from '../../types';

interface CategorySectionProps {
  category: AchievementCategory;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <div className="space-y-4">
      <h4 className="font-medium text-lg flex items-center">
        {category.category}
      </h4>
      <div className="space-y-4">
        {category.achievements.map((achievement, idx) => (
          <AchievementCard key={idx} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};