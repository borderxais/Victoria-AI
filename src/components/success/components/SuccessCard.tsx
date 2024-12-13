import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from 'lucide-react';
import { Achievement } from './Achievement';
import type { SuccessStory } from '../types';

export const SuccessCard: React.FC<SuccessStory> = ({ 
  name, 
  nameCn, 
  school, 
  year, 
  icon: Icon,
  achievements, 
  quote 
}) => (
  <Card className="group hover:shadow-xl transition-all">
    <CardContent className="pt-6">
      <div className="relative">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-gray-50 rounded-full transform group-hover:scale-110 transition-transform">
            <Icon className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-center">
              {name}
              <span className="block text-base text-gray-600">{nameCn}</span>
            </h3>
            <div className="flex items-center justify-center mt-2">
              <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-medium">{school} '{year}</span>
            </div>
          </div>

          <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
            {achievements.map((achievement, idx) => (
              <Achievement key={idx} achievement={achievement} />
            ))}
          </div>

          <blockquote className="text-sm text-gray-600 italic border-l-2 border-blue-600 pl-4 bg-blue-50 py-3 rounded-r-lg">
            "{quote}"
          </blockquote>
        </div>
      </div>
    </CardContent>
  </Card>
);