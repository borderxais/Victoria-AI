import React from 'react';
import { Header } from '../components/layout/Header';
import { HeroImage } from '../components/landing/hero/HeroImage';
import { HeroStats } from '../components/landing/hero/HeroStats';
import { FeatureSection } from '../components/landing/features/FeatureSection';
import { CallToAction } from '../components/landing/cta/CallToAction';

export const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16">
        <FeatureSection />
        <CallToAction />
      </main>
    </div>
  );
};
