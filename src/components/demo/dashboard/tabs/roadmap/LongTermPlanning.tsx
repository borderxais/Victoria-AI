import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Heart, ChevronRight } from 'lucide-react';
import { longTermPlanning } from '../../../data/roadmapData';

export const LongTermPlanning = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          College Freshman Year Planning (2024-2025)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">Academic Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">First Semester</h4>
                <div className="space-y-2">
                  {longTermPlanning.academic.firstSemester.map((course, idx) => (
                    <div key={idx} className="text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-500" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Second Semester</h4>
                <div className="space-y-2">
                  {longTermPlanning.academic.secondSemester.map((course, idx) => (
                    <div key={idx} className="text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-500" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">Research Continuation</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Primary Goals</h4>
                <div className="space-y-2">
                  {longTermPlanning.research.goals.map((goal, idx) => (
                    <div key={idx} className="text-sm flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-500" />
                      {goal}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Research Topics</h4>
                <div className="space-y-2">
                  {longTermPlanning.research.topics.map((topic, idx) => (
                    <div key={idx} className="text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-500" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">Leadership & Social Impact</h3>
            <div className="space-y-3">
              {longTermPlanning.leadership.map((goal, idx) => (
                <div key={idx} className="text-sm flex items-center gap-2">
                  <Heart className="w-4 h-4 text-purple-500" />
                  {goal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};