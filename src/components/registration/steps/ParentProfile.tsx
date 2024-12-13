import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRegistration } from '@/contexts/RegistrationContext';

export const ParentProfile = () => {
  const { parentInfo, handleParentInfoChange } = useRegistration();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={parentInfo.firstName}
            onChange={(e) => handleParentInfoChange('firstName', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={parentInfo.phone}
            onChange={(e) => handleParentInfoChange('phone', e.target.value)}
          />
        </div>
      </div>
      <div>
        <Label>Preferred Language</Label>
        <RadioGroup
          value={parentInfo.preferredLanguage}
          onValueChange={(value) => handleParentInfoChange('preferredLanguage', value)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="en" id="en" />
            <Label htmlFor="en">English</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="zh" id="zh" />
            <Label htmlFor="zh">Chinese</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};