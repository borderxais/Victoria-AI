#!/bin/bash

# Create all necessary directories
mkdir -p src/components/shared/ui
mkdir -p src/components/shared/layout
mkdir -p src/components/landing/hero
mkdir -p src/components/landing/features
mkdir -p src/components/landing/cta
mkdir -p src/components/dashboard/core
mkdir -p src/components/dashboard/tabs
mkdir -p src/components/dashboard/widgets

# Move UI components
mv src/components/ui/* src/components/shared/ui/

# Move layout components
mv src/components/layout/Header.tsx src/components/shared/layout/
mv src/components/layout/Footer.tsx src/components/shared/layout/

# Move landing page components
mv src/components/layout/HeroImage.tsx src/components/landing/hero/
mv src/components/layout/HeroStats.tsx src/components/landing/hero/
mv src/components/cta/CallToAction.tsx src/components/landing/cta/
mv src/components/features/* src/components/landing/features/

# Move dashboard components
mv src/components/demo/FamilyEducationDashboard.tsx src/components/dashboard/core/
mv src/components/demo/tabs/* src/components/dashboard/tabs/
mv src/components/demo/dashboard/components/* src/components/dashboard/widgets/

# Move registration components
mv src/components/registration/* src/components/dashboard/core/registration/

# Clean up empty directories
rm -rf src/components/ui
rm -rf src/components/layout
rm -rf src/components/cta
rm -rf src/components/features
rm -rf src/components/demo
rm -rf src/components/success
rm -rf src/components/registration
rm -rf src/components/common
rm -rf src/components/home
