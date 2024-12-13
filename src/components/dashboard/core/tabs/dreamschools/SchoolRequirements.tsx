import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { School } from 'lucide-react';
import { schoolRequirements } from '../../data/schoolRequirements';

export const SchoolRequirements = () => {
  return (
    <>
      {Object.values(schoolRequirements).map((school) => (
        <Card key={school.name}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="w-5 h-5" />
              {school.name} Historical Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Academic Requirements */}
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Academic Profile (Class of 2023)</h3>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <div className="font-medium">SAT Score Range (Middle 50%)</div>
                      <div>Math: {school.academicProfile.sat.math}</div>
                      <div>Reading/Writing: {school.academicProfile.sat.readingWriting}</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">GPA Expectations</div>
                      <div>Unweighted: {school.academicProfile.gpa.unweighted}</div>
                      <div>Weighted: {school.academicProfile.gpa.weighted}</div>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">AP/IB Requirements</div>
                      <div>• {school.academicProfile.apIb.courses}</div>
                      <div>• {school.academicProfile.apIb.scores}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Research Experience</h3>
                  <div className="space-y-2 text-sm">
                    {school.research.map((req, idx) => (
                      <div key={idx}>• {req}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Leadership & Impact</h3>
                  <div className="space-y-2 text-sm">
                    {school.leadership.map((req, idx) => (
                      <div key={idx}>• {req}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Awards & Recognition</h3>
                  <div className="space-y-2 text-sm">
                    {school.awards.map((req, idx) => (
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