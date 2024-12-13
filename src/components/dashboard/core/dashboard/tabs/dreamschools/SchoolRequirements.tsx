import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { School } from 'lucide-react';
import { schoolRequirements } from '../../../data/schoolsData';

export const SchoolRequirements = () => {
  return (
    <>
      {schoolRequirements.map((school) => (
        <Card key={school.name}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="w-5 h-5" />
              {school.name} Historical Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Academic Profile (Class of 2023)</h3>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <div className="font-medium">SAT Score Range (Middle 50%)</div>
                      <div>Math: {school.requirements.sat.math}</div>
                      <div>Reading/Writing: {school.requirements.sat.readingWriting}</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">GPA Expectations</div>
                      <div>Unweighted: {school.requirements.gpa.unweighted}</div>
                      <div>Weighted: {school.requirements.gpa.weighted}</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">AP/IB Expectations</div>
                      {school.requirements.ap.map((req, idx) => (
                        <div key={idx}>• {req}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Research Experience</h3>
                  <div className="space-y-2 text-sm">
                    {school.requirements.research.map((req, idx) => (
                      <div key={idx}>• {req}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Leadership & Impact</h3>
                  <div className="space-y-2 text-sm">
                    {school.requirements.leadership.map((req, idx) => (
                      <div key={idx}>• {req}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Awards & Recognition</h3>
                  <div className="space-y-2 text-sm">
                    {school.requirements.awards.map((req, idx) => (
                      <div key={idx}>• {req}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};