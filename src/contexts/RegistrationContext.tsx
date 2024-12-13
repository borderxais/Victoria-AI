import React, { createContext, useContext, useState } from 'react';

interface ParentInfo {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  phone: string;
  preferredLanguage: string;
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: string;
  school: string;
}

interface RegistrationContextType {
  step: number;
  setStep: (step: number) => void;
  parentInfo: ParentInfo;
  handleParentInfoChange: (field: keyof ParentInfo, value: string) => void;
  students: Student[];
  handleStudentChange: (id: number, field: keyof Student, value: string) => void;
  addStudent: () => void;
  removeStudent: (id: number) => void;
  validateStep: (step: number) => boolean;
  handleSubmit: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const RegistrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [parentInfo, setParentInfo] = useState<ParentInfo>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    phone: '',
    preferredLanguage: 'en'
  });
  
  const [students, setStudents] = useState<Student[]>([{
    id: 1,
    firstName: '',
    lastName: '',
    grade: '',
    school: ''
  }]);

  const handleParentInfoChange = (field: keyof ParentInfo, value: string) => {
    setParentInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStudentChange = (id: number, field: keyof Student, value: string) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, [field]: value } : student
    ));
  };

  const addStudent = () => {
    setStudents(prev => [...prev, {
      id: prev.length + 1,
      firstName: '',
      lastName: '',
      grade: '',
      school: ''
    }]);
  };

  const removeStudent = (id: number) => {
    if (students.length > 1) {
      setStudents(prev => prev.filter(student => student.id !== id));
    }
  };

  const validateStep = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return (
          parentInfo.email &&
          parentInfo.password &&
          parentInfo.password === parentInfo.confirmPassword &&
          parentInfo.password.length >= 8
        );
      case 2:
        return (
          parentInfo.firstName &&
          parentInfo.phone
        );
      case 3:
        return students.every(student => 
          student.firstName &&
          student.lastName && 
          student.grade && 
          student.school
        );
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    // Handle final submission
    console.log('Parent Info:', parentInfo);
    console.log('Students:', students);
  };

  return (
    <RegistrationContext.Provider value={{
      step,
      setStep,
      parentInfo,
      handleParentInfoChange,
      students,
      handleStudentChange,
      addStudent,
      removeStudent,
      validateStep,
      handleSubmit
    }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};