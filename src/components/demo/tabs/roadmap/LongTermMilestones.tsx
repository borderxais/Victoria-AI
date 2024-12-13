import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, ChevronRight } from 'lucide-react';
import type { AcademicMilestone } from '../../types';

interface LongTermMilestonesProps {
  milestones: AcademicMilestone[];
}

export const LongTermMilestones: React.FC<LongTermMilestonesProps> = ({ milestones }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <GraduationCap className="w-5 h-5 mr-2" />
          Academic Roadmap 学术规划
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {milestones.map((milestone, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4">{milestone.year}</h3>
              <div className="space-y-4">
                {milestone.goals.map((goal, gidx) => (
                  <div key={gidx} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-3">{goal.title}</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium mb-2">Targets 目标</h5>
                        <div className="space-y-1">
                          {goal.targets.map((target, tidx) => (
                            <div key={tidx} className="flex items-center">
                              <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                              <span className="text-sm">{target}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};