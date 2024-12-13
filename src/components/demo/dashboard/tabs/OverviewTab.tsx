import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, GraduationCap, School, Star } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { CircularProgress } from '../components/CircularProgress';
import { academicMetrics, currentCourses } from '../data/academicData';
import { dreamSchools } from '../data/schoolsData';

export const OverviewTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Academic Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Academic Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {academicMetrics.map((metric) => (
              <div key={metric.label} className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-500">{metric.label}</div>
                <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                {metric.percentile && (
                  <div className="text-sm text-gray-600">{metric.percentile} percentile</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Courses */}
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

      {/* Dream Schools Preview */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <School className="w-5 h-5" />
            Dream Schools Fit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dreamSchools.map((school) => (
              <div key={school.name} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-medium">{school.name}</div>
                  <div className="relative w-16 h-16">
                    <CircularProgress
                      progress={school.fit}
                      size={64}
                      strokeWidth={4}
                      className="text-blue-600"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium">{school.fit}%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {Object.entries(school.scores).map(([category, score]) => (
                    <div key={category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="capitalize">{category}</span>
                        <span>{score}%</span>
                      </div>
                      <Progress value={score} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};