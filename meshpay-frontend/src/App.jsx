import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import PublicRoute from "./components/common/PublicRoute";
import Payments from "./pages/Payments";
import MeshExplorer from "./pages/MeshExplorer";
import PacketMonitor from "./pages/PacketMonitor";
import History from "./pages/History";
import EncryptionDemo from "./pages/EncryptionDemo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
  path="/login"
  element={
    <PublicRoute>
      <Login />
    </PublicRoute>
  }
/>

<Route
  path="/register"
  element={
    <PublicRoute>
      <Register />
    </PublicRoute>
  }
/>

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/mesh" element={<MeshExplorer />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/packets" element={<PacketMonitor />} />
          <Route path="/history" element={<History />} />
          <Route path="/encryption" element={<EncryptionDemo />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;