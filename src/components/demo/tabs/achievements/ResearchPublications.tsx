import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Microscope } from 'lucide-react';

export const ResearchPublications = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Microscope className="w-5 h-5" />
          Research & Publications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <div className="font-medium">AI Healthcare Research</div>
            <span className="text-sm text-gray-500">2023-12</span>
          </div>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• Published in Nature Scientific Reports</p>
            <p>• Novel ML algorithm for disease prediction</p>
            <p>• Stanford Medical School collaboration</p>
            <p>• Featured in Science News</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
              International Impact
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};