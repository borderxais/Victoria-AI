import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GraduationCap, Star } from 'lucide-react';
import type { Course } from '../../types';

interface AcademicExcellenceProps {
  courses: Course[];
}

export const AcademicExcellence: React.FC<AcademicExcellenceProps> = ({ courses }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Academic Excellence
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3">Course Performance</h3>
            <div className="space-y-3">
              {courses.map((course, idx) => (
                <div key={idx} className="pb-3 border-b last:border-0 border-purple-100">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">{course.name}</div>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {course.grade}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {course.highlights.map((highlight, hidx) => (
                      <div key={hidx} className="text-sm text-gray-600 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {highlight}
                      </div>
                    ))}
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