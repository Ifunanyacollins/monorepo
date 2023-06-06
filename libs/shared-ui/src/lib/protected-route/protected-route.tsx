import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from '@mastech/shared-state'; // Replace with your actual auth library import

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthState((state) => state.token);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
