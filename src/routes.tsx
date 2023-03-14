import { ProtectedRoutes } from './components/ProtectedRoutes';

import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgetPassword';
import { UserProfile } from './pages/UserProfile';
import { NotFound } from './pages/NotFound';

import { Home } from './pages/Home';
import { JourneysCourses } from './pages/JourneysCourses';
import { Courses } from './pages/Courses';

export function ReactRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/user-profile"
        element={
          <ProtectedRoutes>
            <UserProfile />
          </ProtectedRoutes>
        }
      />

      <Route path="*" element={<NotFound />} />

      <Route
        path="/journeys"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        } />

      <Route
        path="/journeys/:id"
        element={
          <ProtectedRoutes>
            <JourneysCourses />
          </ProtectedRoutes>
        } />

      <Route
        path="/courses/:id"
        element={
          <ProtectedRoutes>
            <Courses />
          </ProtectedRoutes>
        } />
    </Routes>
  );
}
