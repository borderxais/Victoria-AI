import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegistration } from '@/contexts/RegistrationContext';

export const AccountSetup = () => {
  const { parentInfo, handleParentInfoChange } = useRegistration();

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={parentInfo.email}
          onChange={(e) => handleParentInfoChange('email', e.target.value)}
          placeholder="your@email.com"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={parentInfo.password}
          onChange={(e) => handleParentInfoChange('password', e.target.value)}
          placeholder="••••••••"
        />
        <p className="text-sm text-gray-500 mt-1">
          Must be at least 8 characters
        </p>
      </div>
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={parentInfo.confirmPassword}
          onChange={(e) => handleParentInfoChange('confirmPassword', e.target.value)}
          placeholder="••••••••"
        />
      </div>
    </div>
  );
};