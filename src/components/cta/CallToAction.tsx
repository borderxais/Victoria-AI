import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] " />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/20 rounded-full mix-blend-multiply filter blur-xl" />
      </div>
      
      <div className="relative px-8 py-16 sm:px-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Education Journey?
            <span className="block mt-2 text-2xl">
              准备好开启您的教育之旅了吗？
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
            Join thousands of successful students who have achieved their dreams with Victoria AI.
            <span className="block mt-2">
              加入数千名通过Victoria AI实现梦想的优秀学子。
            </span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/register')}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};