import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from 'lucide-react';
import { academicMetrics } from '../../../data/academicData';

export const AcademicMetrics = () => {
  return (
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
  );
};