import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target, Microscope, Heart, Calendar, CheckCircle } from 'lucide-react';
import { shortTermGoals } from '../../../data/roadmapData';

export const ShortTermGoals = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          Short-term Goals (Next 3 Months)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <Microscope className="w-4 h-4" />
              {shortTermGoals.research.title}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">Target: {shortTermGoals.research.deadline}</span>
              </div>
              <div className="space-y-2">
                {shortTermGoals.research.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${
                      task.status === 'completed' 
                        ? 'bg-green-500 flex items-center justify-center' 
                        : 'border-2 border-blue-500'
                    }`}>
                      {task.status === 'completed' && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm">{task.task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              {shortTermGoals.initiative.title}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium">Target: {shortTermGoals.initiative.deadline}</span>
              </div>
              <div className="space-y-2">
                {shortTermGoals.initiative.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${
                      task.status === 'completed' 
                        ? 'bg-green-500 flex items-center justify-center' 
                        : 'border-2 border-purple-500'
                    }`}>
                      {task.status === 'completed' && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm">{task.task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};