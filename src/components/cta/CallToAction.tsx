import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, School } from 'lucide-react';

export const CallToAction = () => {
  return (
    <div className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 transform -translate-x-1/2" />
        <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 transform translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">
          Begin Your Journey to Elite Education
          <span className="block text-2xl text-gray-600 mt-2">
            开启您的精英教育之路
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join thousands of successful students who have achieved their dreams with Victoria AI
          <span className="block mt-2">
            加入数千名通过Victoria AI实现梦想的优秀学子
          </span>
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
            Schedule Consultation 预约咨询
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-8 pt-8">
          <TrustBadge icon={<Trophy className="w-8 h-8 text-blue-600" />} label="Top Rated Service" />
          <TrustBadge icon={<Users className="w-8 h-8 text-blue-600" />} label="5000+ Students" />
          <TrustBadge icon={<School className="w-8 h-8 text-blue-600" />} label="50+ Universities" />
        </div>
      </div>
    </div>
  );
};

const TrustBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="p-4 bg-white rounded-lg shadow-sm">
    <div className="mx-auto mb-2">{icon}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);