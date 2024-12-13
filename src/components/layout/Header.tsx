import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from 'lucide-react';
import { HeroStats } from './HeroStats';
import { HeroImage } from './HeroImage';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Victoria AI
              </h1>
              <p className="mt-4 text-4xl font-medium text-gray-800">
                Journey to Elite Education
              </p>
              <p className="mt-4 text-4xl font-medium text-gray-800">
                精英教育之路
              </p>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Join thousands of successful students who have achieved their dreams with Victoria AI
              <span className="block mt-2">
                加入数千名通过Victoria AI实现梦想的优秀学子
              </span>
            </p>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
                onClick={() => navigate('/demo')}
              >
                View Demo 体验演示
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => navigate('/register')}
              >
                Register Now 立即注册
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <HeroStats />
          </div>

          <HeroImage />
        </div>
      </div>
    </div>
  );
};