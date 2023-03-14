import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

interface ProtectedRoutesProp {
  children: React.ReactNode;
}

export function ProtectedRoutes({ children }: ProtectedRoutesProp) {
  const {currentUser} = useAuth();

  if (!currentUser) {
    return <Navigate to='/' replace />;
  }

  return (
    <>
      {children}
    </>
  );
}
