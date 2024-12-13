#!/bin/bash

# Create directory structure
mkdir -p src/components/shared/ui
mkdir -p src/components/shared/layout
mkdir -p src/components/landing/hero
mkdir -p src/components/landing/features
mkdir -p src/components/landing/cta
mkdir -p src/components/dashboard/core/registration
mkdir -p src/components/dashboard/tabs
mkdir -p src/components/dashboard/widgets

# Copy files to new locations
cp src/components/layout/Header.tsx src/components/shared/layout/
cp src/components/layout/Footer.tsx src/components/shared/layout/ 2>/dev/null || :
cp src/components/ui/* src/components/shared/ui/ 2>/dev/null || :
cp src/components/layout/HeroImage.tsx src/components/landing/hero/
cp src/components/layout/HeroStats.tsx src/components/landing/hero/
cp src/components/cta/CallToAction.tsx src/components/landing/cta/
cp src/components/features/* src/components/landing/features/ 2>/dev/null || :
cp -r src/components/demo/* src/components/dashboard/core/ 2>/dev/null || :
cp -r src/components/registration/* src/components/dashboard/core/registration/ 2>/dev/null || :

# Update HomePage imports
echo "import React from 'react';
import { Header } from '@/components/shared/layout/Header';
import { HeroImage } from '@/components/landing/hero/HeroImage';
import { HeroStats } from '@/components/landing/hero/HeroStats';
import { FeatureSection } from '@/components/landing/features/FeatureSection';
import { CallToAction } from '@/components/landing/cta/CallToAction';

export const HomePage = () => {
  return (
    <div className=\"w-full\">
      <Header />
      <main className=\"container mx-auto px-4 py-8 space-y-16\">
        <HeroImage />
        <HeroStats />
        <FeatureSection />
        <CallToAction />
      </main>
    </div>
  );
};" > src/pages/HomePage.tsx

# Create index files
echo "export * from './ui/button';
export * from './ui/card';
export * from './ui/tabs';
export * from './layout/Header';" > src/components/shared/index.ts

echo "export * from './hero/HeroImage';
export * from './hero/HeroStats';
export * from './cta/CallToAction';
export * from './features/FeatureSection';" > src/components/landing/index.ts

echo "export * from './core/FamilyEducationDashboard';
export * from './tabs/OverviewTab';
export * from './tabs/RoadmapTab';
export * from './tabs/AchievementsTab';
export * from './tabs/DreamSchoolsTab';" > src/components/dashboard/index.ts
