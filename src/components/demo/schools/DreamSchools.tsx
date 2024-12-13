import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { School } from 'lucide-react';

interface DreamSchoolsProps {
  schools: Array<{
    name: string;
    currentFit: number;
    requirements: {
      academic: number;
      extracurricular: number;
      specialTalents: number;
    };
  }>;
}

export const DreamSchools: React.FC<DreamSchoolsProps> = ({ schools }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {schools.map((school, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <School className="w-5 h-5 mr-2" />
              {school.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Fit 整体匹配度</span>
                  <span>{school.currentFit}%</span>
                </div>
                <Progress value={school.currentFit} className="h-2" />
              </div>
              <div className="space-y-2">
                {Object.entries(school.requirements).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize">
                        {key} {key === 'academic' ? '学术' : key === 'extracurricular' ? '课外活动' : '特长'}
                      </span>
                      <span>{value}%</span>
                    </div>
                    <Progress value={value} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};