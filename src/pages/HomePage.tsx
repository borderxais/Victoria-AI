import React from 'react';
import { Header } from '@/components/layout/Header';
import { FeatureSection } from '@/components/features/FeatureSection';
import { SuccessStories } from '@/components/success/SuccessStories';
import { CallToAction } from '@/components/cta/CallToAction';

export const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <FeatureSection />
      <SuccessStories />
      <CallToAction />
    </div>
  );
};