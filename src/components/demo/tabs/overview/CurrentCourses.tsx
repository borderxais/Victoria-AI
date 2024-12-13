import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface Course {
  name: string;
  grade: string;
  highlights: string[];
}

interface CurrentCoursesProps {
  courses: Course[];
}

export const CurrentCourses: React.FC<CurrentCoursesProps> = ({ courses }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Courses 在读课程</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">{course.name}</h4>
                <span className={`px-2 py-1 rounded text-sm ${
                  course.grade === 'A+' ? 'bg-green-100 text-green-800' : 
                  course.grade === 'A' ? 'bg-blue-100 text-blue-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {course.grade}
                </span>
              </div>
              <div className="space-y-1">
                {course.highlights.map((highlight, hidx) => (
                  <div key={hidx} className="text-sm text-gray-600 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    {highlight}
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