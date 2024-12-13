import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ParentRegistration } from '@/components/registration/ParentRegistration';

export const RegistrationRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<ParentRegistration />} />
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
};