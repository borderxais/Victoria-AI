import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from 'lucide-react';
import { HeroStats } from './HeroStats';

const Stat = ({ number, label }: { number: string; label: string }) => (
  <div>
    <div className="text-3xl font-bold text-blue-600">{number}</div>
    <div className="text-sm">{label}</div>
  </div>
);

const HeaderVisual = () => (
  <div className="relative">
    <div className="absolute -right-4 -top-4 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
    <div className="relative bg-white rounded-2xl shadow-xl p-6 mb-6">
      <img 
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
        alt="Student success" 
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 text-blue-600">🎯</div>
        <div>
          <h3 className="font-semibold">AI Profile Analysis 智能档案分析</h3>
          <p className="text-sm text-gray-600">Personalized insights for your success</p>
        </div>
      </div>
    </div>
    
    <div className="relative bg-white rounded-2xl shadow-xl p-6">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
          alt="Strategic planning" 
          className="w-full h-32 object-cover rounded-lg"
        />
        <img 
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80"
          alt="Achievement tracking" 
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 text-purple-600">📈</div>
        <div>
          <h3 className="font-semibold">Strategic Planning 战略规划</h3>
          <p className="text-sm text-gray-600">Customized roadmap to your dream schools</p>
        </div>
      </div>
    </div>
  </div>
);

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
                View Demo 产品演示
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

          <HeaderVisual />
        </div>
      </div>
    </div>
  );
};
