import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { CircularProgress } from '../../components/CircularProgress';
import { dreamSchools } from '../../../data/schoolsData';

export const DreamSchoolsPreview = () => {
  return (
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
  );
};