import React from 'react';
import { ShortTermGoals } from './roadmap/ShortTermGoals';
import { LongTermPlanning } from './roadmap/LongTermPlanning';
import { MilestonesTimeline } from './roadmap/MilestonesTimeline';

export const RoadmapTab = () => {
  return (
    <div className="space-y-6">
      <ShortTermGoals />
      <LongTermPlanning />
      <MilestonesTimeline />
    </div>
  );
};