import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { CircularProgress } from '../../components/CircularProgress';
import { dreamSchools } from '../../../data/schoolsData';

export const FitAnalysis = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5" />
          Current Profile Fit Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dreamSchools.map((school) => (
            <div key={school.name} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">{school.name}</h3>
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