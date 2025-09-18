import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/useAuth";

import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DashboardLayout from "./components/DashboardLayout";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Analytics from "./components/Analytics";

// ✅ PrivateRoute now uses useAuth
const PrivateRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/dashboard" />;

  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Redirect "/" to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard/*"
            element={
              <DashboardLayout>
                <Routes>
                  {/* Role-based dashboards */}
                  <Route
                    path="user"
                    element={
                      <PrivateRoute role="user">
                        <UserDashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="admin"
                    element={
                      <PrivateRoute role="admin">
                        <AdminDashboard />
                      </PrivateRoute>
                    }
                  />

                  {/* Shared pages */}
                  <Route
                    path="profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="settings"
                    element={
                      <PrivateRoute>
                        <Settings />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="analytics"
                    element={
                      <PrivateRoute>
                        <Analytics />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </DashboardLayout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
