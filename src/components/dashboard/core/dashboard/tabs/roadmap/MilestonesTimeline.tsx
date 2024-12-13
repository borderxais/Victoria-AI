import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock } from 'lucide-react';
import { milestones } from '../../../data/roadmapData';

export const MilestonesTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Key Milestones Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative flex items-start ml-8">
                <div className="absolute -left-8 mt-1.5">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">{idx + 1}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex-1">
                  <div className="text-sm font-medium mb-2">{milestone.date}</div>
                  <div className="text-sm text-gray-600">
                    {milestone.tasks.map((task, taskIdx) => (
                      <div key={taskIdx}>• {task}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};