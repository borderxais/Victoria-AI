import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useRegistration } from '@/contexts/RegistrationContext';
import { AccountSetup } from './steps/AccountSetup';
import { ParentProfile } from './steps/ParentProfile';
import { StudentInfo } from './steps/StudentInfo';

export const RegistrationForm = () => {
  const { step, setStep, validateStep, handleSubmit } = useRegistration();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Family Registration</CardTitle>
        <CardDescription>
          Create your account to begin
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && <AccountSetup />}
        {step === 2 && <ParentProfile />}
        {step === 3 && <StudentInfo />}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <Button
              onClick={() => setStep(step - 1)}
              variant="outline"
            >
              Back
            </Button>
          )}
          <div className="ml-auto">
            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!validateStep(step)}
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!validateStep(step)}
              >
                Complete Registration
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};