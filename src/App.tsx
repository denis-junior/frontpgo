import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./app.css";
import LoginPage from "./pages/Auth/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import { AuthProvider } from "./contexts/AuthContext";
import Contract from "./pages/Contract";
import Client from "./pages/Client";
import Seller from "./pages/Seller";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import { GlobalProvider } from "./contexts/global/GlobalContext";
import Functions from "./pages/Functions";

function App() {
  return (
    <>
      {/* <div style={{ display: "flex", height: "calc(100% - 70px)" }}> */}
      <AuthProvider>
        <GlobalProvider>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contract"
              element={
                <ProtectedRoute>
                  <Contract />
                </ProtectedRoute>
              }
            />
            <Route
              path="/client"
              element={
                <ProtectedRoute>
                  <Client />
                </ProtectedRoute>
              }
            />
            <Route
              path="/seller"
              element={
                <ProtectedRoute>
                  <Seller />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route
              path="/functions"
              element={
                <ProtectedRoute>
                  <Functions />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </GlobalProvider>
      </AuthProvider>
      {/* </div> */}
    </>
  );
}

export default App;
