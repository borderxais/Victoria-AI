import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Star } from 'lucide-react';
import { currentCourses } from '../../../data/academicData';

export const CurrentCourses = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="w-5 h-5" />
          Current Courses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {currentCourses.map((course) => (
            <div key={course.name} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">{course.name}</div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {course.grade}
                </span>
              </div>
              <div className="space-y-1">
                {course.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {achievement}
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